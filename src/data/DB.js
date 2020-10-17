import localForage from "localforage";

let initialed = false;

export default class DB {

    static get instance() {
        if (!initialed) {
            localForage.config({
                driver: localForage.WEBSQL, // Force WebSQL; same as using setDriver()
                name: 'digiHymnal',
                version: 1.0,
                size: 4980736, // Size of database, in bytes. WebSQL-only for now.
                storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
            });
            initialed = true;
        }

        return localForage;
    }
}