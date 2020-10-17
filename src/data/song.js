import DB from "./DB";
import SAMPLE_1 from "../../samples/1.js"
import SAMPLE_2 from "../../samples/2.js"

const SAMPLE_SONGS = [SAMPLE_1, SAMPLE_2];

const KEY_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.instance;
    }

    async initSample() {
        return await this.db.setItem(KEY_NAME, SAMPLE_SONGS);
    }

    async list({ start, limit }) {
        let result = await this.db.getItem(KEY_NAME) || [];

        return Promise.resolve(result.slice(start || 0, limit || 10));
    }

    async get(id) {
        let result = await this.db.getItem(KEY_NAME) || [];

        return Promise.resolve(result.filter((s) => s.id == id)[0]);
    }

    async languages(id) {
        let song = await this.get(id);
        if (!song) return Promise.resolve([]);

        return Promise.resolve(Object.keys(song.title));
    }
};