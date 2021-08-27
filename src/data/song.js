import DataManager from '../data/dataManager';
import DB from "./DB";
const dataManager = new DataManager();
const DB_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
        this.cacheIsSet = false;
        this.nextAvailableId = 0;
        this.exampleSong = {
          "title": {
              "en": "Twinkle twinkle little star"
          },
          "author": "traditional",
          "key": "G",
          "lyrics": {
              "verses": [
                  {
                      "lines": [
                          {
                              "phrases": [
                                  {
                                      "chord": "G",
                                      "number": "1",
                                      "en": "Twinkle, twinkle li"
                                  },
                                  {
                                      "chord": "C",
                                      "number": "4",
                                      "en": "ttle st"
                                  },
                                  {
                                      "chord": "G",
                                      "number": "1",
                                      "en": "ar,"
                                  }
                              ]
                          },{
                              "phrases": [
                                  {
                                      "chord": "C",
                                      "number": "4",
                                      "en": "How I w"
                                  },{
                                      "chord": "G",
                                      "number": "1",
                                      "en": "onder w"
                                  },{
                                      "chord": "D",
                                      "number": "5",
                                      "en": "hat you a"
                                  },{
                                      "chord": "G",
                                      "number": "1",
                                      "en": "re"
                                  },
                              ]
                          }
                      ],
                      "label": "Chorus",
                      "id": 1
                  },{
                      "lines": [
                          {
                              "phrases": [
                                {
                                    "chord": "G",
                                    "number": "1",
                                    "en": "Up ab"
                                },{
                                    "chord": "C",
                                    "number": "4",
                                    "en": "ove the w"
                                },{
                                    "chord": "G",
                                    "number": "1",
                                    "en": "orld so h"
                                },{
                                    "chord": "D",
                                    "number": "5",
                                    "en": "igh,"
                                },
                              ]
                          },{
                              "phrases": [
                                {
                                    "chord": "G",
                                    "number": "1",
                                    "en": "Like a Di"
                                },{
                                    "chord": "C",
                                    "number": "4",
                                    "en": "amond "
                                },{
                                    "chord": "G",
                                    "number": "1",
                                    "en": "in the s"
                                },{
                                    "chord": "D",
                                    "number": "5",
                                    "en": "ky."
                                }
                              ]
                          }
                      ],
                      "label": "verse 1",
                      "id": 2
                  },
              ]
          },
          "metadata": [
              {
                  "en": ".Copyright....  "
              }
          ],
          "id": "70"
      }
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
          try {
            tasks.push(await this.setOne(song.id,song.song));
          } catch (error) {
            console.error({"error": error, "data":HymnalData[songID]})
          }
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
          if (this.nextAvailableId <= parseInt(songId)){
            this.nextAvailableId = (parseInt(songId) + 1);
            console.log({"The nextAvailableId is": this.nextAvailableId});
          }
          resolve()
        })
      })           
    }

    async getAll() {
      return this.db.getItems(null);            
    }

    async checkIdClear() {
      var id = toString(this.nextAvailableId)
      this.get(id).then( data =>{
        if (data != undefined || data != null){
          ++this.nextAvailableId;
          this.checkIdClear();
        }else {
          return;
        }
      })
    }
    async makeNewBlankSong() {
      // TODO get the next available ID...
      return this.checkIdClear().then(() => {
        var id = this.nextAvailableId.toString()
        this.nextAvailableId += 1;
        // get blank data
        var data = this.exampleSong;
        data.id = id
        console.log({"id":id, "data":data})
        return this.db.setItem(id, data, () => {
          console.log({"it worked!":id})
        }).then(() => {
          dataManager.putNewSong(id,data)
          this.get(id).then( data => {
            console.log(data)
          })
          return id;
        });
      })
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
