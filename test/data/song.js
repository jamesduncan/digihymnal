import Song from "../../src/data/song"
import { assert } from "chai"

const TARGET = new Song();

describe('Song Data', async () => {
    describe('list()', async () => {
        it('should return an array list of Songs', async () => {
            let start = 0,
                limit = 10;

            let result = await TARGET.list({ start, limit });

            assert.isArray(result);
        });
    });

    describe('get()', async () => {
        it('should return a song that id is "sample01"', async () => {
            let id = "sample01";

            let result = await TARGET.get(id);

            assert.exists(result);
            assert.equal(id, result.id);
        });
    });


    describe('languages()', async () => {
        it('should return a available language code list of the song', async () => {
            let id = "sample01";

            let result = await TARGET.languages(id);

            assert.exists(result);
            assert.isArray(result);
            assert.equal("eng", result[0]);
            assert.equal("at", result[1]);
            assert.equal("ct", result[2]);
            assert.equal("ctr", result[3]);
        });
    });
});