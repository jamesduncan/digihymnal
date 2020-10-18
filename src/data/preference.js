import DB from "./DB";

const DB_NAME = "DIGIHYMNAL_PREFERENCE";
const LANGUAGE_KEY_NAME = "DIGIHYMNAL_LANGUAGE";

export default class Preference {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
    }

    async setLanguage(languageCode) {
        window.languageCode = languageCode;
        return await this.db.setItem(LANGUAGE_KEY_NAME, languageCode);
    }

    async getLanguage() {
        return await this.db.getItem(LANGUAGE_KEY_NAME);
    }
}