import DB from "./DB";
// import SAMPLE_1 from "../../samples/1.js";
// import SAMPLE_2 from "../../samples/2.js";
// import SAMPLE_3 from "../../samples/parsed/1-AT 1 Ah Lord God.js";
import SAMPLE_4 from "../../samples/parsed/1-BT 11 Ah Lord God.js";
import SAMPLE_5 from "../../samples/parsed/1-BTR 11 Ke Kencho.js";
import SAMPLE_6 from "../../samples/parsed/40 BT 67 Salvation’s Day Has Arrived.js";
import SAMPLE_7 from "../../samples/parsed/40 BTR 67 Tharpai Nyima Shar Yoe.js";
import SAMPLE_8 from "../../samples/parsed/95 BT 102 Lord’s Prayer.js";
import SAMPLE_9 from "../../samples/parsed/95 BTR 102 Tshowo Gi Moenlam.js";
import SAMPLE_10 from "../../samples/parsed/BT 106 Kingdom Of Father God.js";
import SAMPLE_11 from "../../samples/parsed/BT 106 Yab Kencho Gi Gyelsey.js";
import SAMPLE_12 from "../../samples/parsed/BT 108 Hold Me In Your Embrace.js";
import SAMPLE_13 from "../../samples/parsed/BT 108 Yeshu Choe Gi Phama Nga Zha Na.js";
import SAMPLE_14 from "../../samples/parsed/BT 12 Kencho Choe Gi Jampa Di.js";
import SAMPLE_15 from "../../samples/parsed/BT 12 Lord Your Love Is.js";
import SAMPLE_16 from "../../samples/parsed/BT 15 Khatsa Dari Deu Tabura.js";
import SAMPLE_17 from "../../samples/parsed/BT 15 Yesterday, Today.js";
import SAMPLE_18 from "../../samples/parsed/BT 16 Gawa La Da Gawa La.js";
import SAMPLE_19 from "../../samples/parsed/BT 16 Joy Oh Joy.js";
import SAMPLE_20 from "../../samples/parsed/BT 17 Gawai Luechi.js";
import SAMPLE_21 from "../../samples/parsed/BT 17 Song of Joy.js";
import SAMPLE_22 from "../../samples/parsed/BT 22 Ngachey Tsawa Yeshu Di.js";
import SAMPLE_23 from "../../samples/parsed/BT 22 Our Lord Jesus.js";
import SAMPLE_24 from "../../samples/parsed/BT 25 From My Heart To God.js";
import SAMPLE_25 from "../../samples/parsed/BT 25 Ngesem Lay Yap Kencho Lu.js";
import SAMPLE_26 from "../../samples/parsed/BT 26 Charo Tsu Sho Sa Wai.js";
import SAMPLE_27 from "../../samples/parsed/BT 26 Hallelujah, Hallelujah.js";
import SAMPLE_28 from "../../samples/parsed/BT 29 Dari Na Tso Zom.js";
import SAMPLE_29 from "../../samples/parsed/BT 29 Gathering Song.js";
import SAMPLE_30 from "../../samples/parsed/BT 3 Choe Gi Nangmi Nimzang Dilu.js";
import SAMPLE_31 from "../../samples/parsed/BT 3 Thank You Lord For This Fine Day.js";
import SAMPLE_32 from "../../samples/parsed/BT 32 Dampai Thuyee Ten.js";
import SAMPLE_33 from "../../samples/parsed/BT 32 Welcome Holy Spirit.js";
import SAMPLE_34 from "../../samples/parsed/BT 37 Amazing God.js";
import SAMPLE_35 from "../../samples/parsed/BT 37 Yamtshen Che We Thujee.js";
import SAMPLE_36 from "../../samples/parsed/BT 41 Jesus Your Love Is.js";
import SAMPLE_37 from "../../samples/parsed/BT 41 Yeshu Choe Gi Jampa.js";
import SAMPLE_38 from "../../samples/parsed/BT 57 Jesus Gives You.js";
import SAMPLE_39 from "../../samples/parsed/BT 57 Sem Lu Zhedey Meyna.js";
import SAMPLE_40 from "../../samples/parsed/BT 60 God My Savior.js";
import SAMPLE_41 from "../../samples/parsed/BT 60 Kencho Ya Kencho.js";
import SAMPLE_42 from "../../samples/parsed/BT 8 Lord Your Name Is Good.js";
import SAMPLE_43 from "../../samples/parsed/BT 8 Tsawa Yeshu Tsen Bom Sho Enn.js";
import SAMPLE_44 from "../../samples/parsed/BT 96 Namkha Zhumi Kencho.js";
import SAMPLE_45 from "../../samples/parsed/BT 96 Our God In Heaven.js";
import SAMPLE_46 from "../../samples/parsed/DPS018 AT Oh Friend.js";
import SAMPLE_47 from "../../samples/parsed/DPS036 AT Merciful and Humble Savior.js";
import SAMPLE_48 from "../../samples/parsed/DPS095 AT The Lord_s Prayer.js";
import SAMPLE_49 from "../../samples/parsed/DPS115 AT Lord and Saviour Jesus.js";
import SAMPLE_50 from "../../samples/parsed/DPS150 AT Oh my God, I worship You.js";
import SAMPLE_51 from "../../samples/parsed/DPS194 AT From Beginning to End He Lives.js";
import SAMPLE_52 from "../../samples/parsed/DPS218 AT All Nations Will Bring You Glory.js";
import SAMPLE_53 from "../../samples/parsed/DPS235 AT Jesus_ Messenger.js";
import SAMPLE_54 from "../../samples/parsed/DPS257 AT The Lord Is My Shepherd.js";
import SAMPLE_55 from "../../samples/parsed/GL004 I Believe in Jesus.js";
import SAMPLE_56 from "../../samples/parsed/God’s Love.js";
import SAMPLE_57 from "../../samples/parsed/Kencho Gi Gawa.js";
import SAMPLE_58 from "../../samples/parsed/Yet Not I But Through Christ In Me.js";


const SAMPLE_SONGS = [SAMPLE_4, SAMPLE_5, SAMPLE_6, SAMPLE_7, SAMPLE_8, SAMPLE_9, SAMPLE_10, SAMPLE_11, SAMPLE_12, SAMPLE_13, SAMPLE_14, SAMPLE_15, SAMPLE_16, SAMPLE_17, SAMPLE_18, SAMPLE_19, SAMPLE_20, SAMPLE_21, SAMPLE_22, SAMPLE_23, SAMPLE_24, SAMPLE_25, SAMPLE_26, SAMPLE_27, SAMPLE_28, SAMPLE_29, SAMPLE_30, SAMPLE_31, SAMPLE_32, SAMPLE_33, SAMPLE_34, SAMPLE_35, SAMPLE_36, SAMPLE_37, SAMPLE_38, SAMPLE_39, SAMPLE_40, SAMPLE_41, SAMPLE_42, SAMPLE_43, SAMPLE_44, SAMPLE_45, SAMPLE_46, SAMPLE_47, SAMPLE_48, SAMPLE_49, SAMPLE_50, SAMPLE_51, SAMPLE_52, SAMPLE_53, SAMPLE_54, SAMPLE_55, SAMPLE_56, SAMPLE_57, SAMPLE_58];

const DB_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
    }

    async initSample() {
        let tasks = [];

debugger;
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