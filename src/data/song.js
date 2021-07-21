import DataManager from '../data/dataManager';
import DB from "./DB";
const dataManager = new DataManager();
const DB_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
        this.cacheIsSet = false;
    }

    async initSample() {
      //this.db.setItems(songList)
      console.log({"cacheIsSet":this.cacheIsSet});
      if (this.cacheIsSet){
        return "";
      } else{
        //let tasks = []
        return new Promise((resolve, reject) => {
          dataManager.getSongs().then( songList => {
            try {
              this.setAll(songList).then(() => {
                //this.getAll(null).then(gottenData => {
                  // debugger;
                  // console.log(gottenData)
                this.cacheIsSet = true
                resolve();
                //})
              })
            } catch (error) {
              reject(error)
            }
          });
        });
      }        
    }
    
    async setAll(HymnalData) {
      var tasks = []
      // the array we get from the server doesn't match the 'id' in the song. 
      // We need to rebuild the local data using the correct index
      for (const songID in HymnalData) {
        if(songID === null || HymnalData === null){
          console.error("Hymnal Data is null")
          continue;
        }
        if (Object.hasOwnProperty.call(HymnalData, songID)) {
          const song = HymnalData[songID];
          tasks.push(await this.setOne(song.id,song.song));
        }
      }
      return Promise.all(tasks)          
    }
    async setOne(songId, song) {
      return new Promise((resolve, reject) => {
        if(songId == undefined){
          reject("Id undefined")
        }
        this.db.setItem(songId,song).then(() =>{
          resolve()
        })
      })           
    }

    async getAll() {
      return this.db.getItems(null);            
    }


    async list({ start, limit, languageCode }) {

        let tasks = [];
        let result = [];
        let rawIds = await this.db.keys();
        // ['author', 'id', 'key', 'lyrics', 'metadata', 'song', 'title', 'undefined']
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
