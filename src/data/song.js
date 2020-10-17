import SAMPLE_1 from "../../samples/1.js"
import SAMPLE_2 from "../../samples/2.js"

const SAMPLE_SONGS = [SAMPLE_1, SAMPLE_2];

export default class SongCollection {
    async list({ start, limit }) {
        return Promise.resolve(SAMPLE_SONGS);
    }

    async get(id) {
        return Promise.resolve(SAMPLE_SONGS.filter((s) => s.id == id)[0]);
    }

    async languages(id) {
        let song = SAMPLE_SONGS.filter((s) => s.id == id)[0];
        if (!song) return [];

        return Promise.resolve(Object.keys(song.title));
    }
};