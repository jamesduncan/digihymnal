import DB from "./DB";

const DB_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
    }

    async initSample(songList) {
        //this.db.setItems(songList)
        let tasks = []
        for (const songID in songList) {
            if(songID === null || songList === null){
                continue;
            }
            if (Object.hasOwnProperty.call(songList, songID)) {
                const song = songList[songID];
                tasks.push(await this.db.setItem(songID,song.song))
            }
        }
        return Promise.all(tasks)        
    }


    async list({ start, limit, languageCode }) {

        // TODO
        // Update to pull using AJAX request

        let tasks = [];
        let result = [];
        let rawIds = await this.db.keys();
        ['author', 'id', 'key', 'lyrics', 'metadata', 'song', 'title', 'undefined']
        let ids = rawIds.filter(arrayItem => !(['author', 'id', 'key', 'lyrics', 'metadata', 'song', 'title', 'undefined'].includes(arrayItem)));
        //  ids = [0,1,2]
        ids = ids.slice(start || 0, limit || 10);

        // load and push songs to an array consequently
        (ids || []).forEach((id) => {
            tasks.push(() => new Promise(async (next, bad) => {
                result.push(await this.get(id));
                next();
            }));
        });

        // Return data
        tasks.push(() => {

            // Convert title to current language
            if (languageCode) {
                (result || []).forEach((item) => {
                    if (!item || !item.title) return '';

                    var found = false;
                    Object.keys(item.title).forEach((prop) => {
                        //console.log(prop, languageCode);
                        if (prop == languageCode) {
                          item.title = item.title[prop];
                          found = true;
                        }
                    });
                    if (!found) {
                      delete item.title;
                    }
                });
            }

            return Promise.resolve(result);
        });

        return tasks.reduce((promiseChain, currTask) => {
            return promiseChain.then(currTask);
        }, Promise.resolve([]));
    }

    async get(id) {
        return await this.db.getItem(id);
    }
    
    async set(id, data) {
        console.log({"id":id, "data":data})
        return await this.db.setItem(id, data, function() {
            console.log({"it worked!":id})
          });
    }

    async languages(id) {
        let song = await this.get(id);
        if (!song) return Promise.resolve([]);

        return Promise.resolve(Object.keys(song.title));
    }
};
