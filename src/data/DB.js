import localForage from "localforage";

let isConfig;
let DB_Instances = {};

export default class DB {

    static getInstance(name) {

        if (!isConfig) {
            localForage.config({
                driver: localForage.WEBSQL, // Force WebSQL; same as using setDriver()
                name: 'digiHymnal',
                version: 1.0,
                size: 4980736, // Size of database, in bytes. WebSQL-only for now.
                storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
            });
        }

        if (DB_Instances[name] == null)
            DB_Instances[name] = localForage.createInstance({ name });

        return DB_Instances[name];
    }
}