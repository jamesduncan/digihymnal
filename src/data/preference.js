import DB from "./DB";

const DB_NAME = "DIGIHYMNAL_PREFERENCE";
const LANGUAGE_KEY_NAME = "DIGIHYMNAL_LANGUAGE";
const EDITMODE_KEY_NAME = "DIGIHYMNAL_EDITMODE";

export default class Preference {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
    }

    async setLanguage(languageCode) {
        window.languageCode = languageCode;
        return await this.db.setItem(LANGUAGE_KEY_NAME, languageCode);
    }

    async getLanguage() {
        var lang = await this.db.getItem(LANGUAGE_KEY_NAME);
        if (!lang) {
            this.setLanguage("kt");
            lang = "kt";
        }
        return lang;
    }

    async setEditMode(value) {
        window.editMode = value;
        return await this.db.setItem(EDITMODE_KEY_NAME, value);
    }

    async getEditMode() {
        var mode = await this.db.getItem(EDITMODE_KEY_NAME);
        if (!mode) {
            this.setEditMode(false);
            mode = false;
        }
        return mode;
    }
}