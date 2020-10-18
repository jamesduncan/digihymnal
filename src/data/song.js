import DB from "./DB";
import SAMPLE_1 from "../../samples/1.js"
import SAMPLE_2 from "../../samples/2.js"

const SAMPLE_SONGS = [SAMPLE_1, SAMPLE_2];

const DB_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
    }

    async initSample() {
        let tasks = [];

        SAMPLE_SONGS.forEach(async (song) => {
            tasks.push(await this.db.setItem(song.id, song));
        })

        return Promise.all(tasks);
    }

    async list({ start, limit, languageCode }) {
        let tasks = [];
        let result = [];
        let ids = await this.db.keys();
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
                    if (!item.title) return;

                    var found = false;
                    Object.keys(item.title).forEach((prop) => {
                        console.log(prop, languageCode);
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

    async languages(id) {
        let song = await this.get(id);
        if (!song) return Promise.resolve([]);

        return Promise.resolve(Object.keys(song.title));
    }
};