import DB from "./DB";

const KEY_NAME = "DIGIHYMNAL_LANGUAGE";

export default class Preference {
    constructor() {
        this.db = DB.instance;
    }

    async setLanguage(languageCode) {
        return await this.db.setItem(KEY_NAME, languageCode);
    }

    async getLanguage() {
        return await this.db.getItem(KEY_NAME);
    }
}