import fetch from 'node-fetch';
// https://www.npmjs.com/package/node-fetch#difference-from-client-side-fetch


/// //// Get an array of IDs and request them individually
// http.open("GET", "https://dhapi.achoobert.repl.co/list");
// http.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        console.log(JSON.parse(http.responseText));
//        let list = JSON.parse(http.responseText)
//        songCollection.initSample(list);
//     }
// };
// http.send();

export default class dataManager {
    // TODO 
    constructor() {
        fetch = fetch;
        const string = 'hello world';
    }
    // TODO 
    async getString() {
        return this.string
    }
    // TODO 
    async putLine(songId,verseId,lineId,newData) {
        const body = { 'songId': songId,'verseId': verseId,'lineId': lineId,'newData': newData };
 
        fetch(`https://dhapi.achoobert.repl.co/handle/update/${songId}`, {
                method: 'POST',
                body:    JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.text())
            .then(text => {return text});
    }
    // TODO  Needed when deleting line
    async putVerse(songId,verseId,newData) {
        const body = { 'songId': songId,'verseId': verseId,'newData': newData };
 
        fetch(`https://dhapi.achoobert.repl.co/handle/update/${songId}`, {
                method: 'POST',
                body:    JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(json => console.log(json));
    }
    // TODO update entire song. Needed when deleting verse, adding language, ?changeing metadata?
    async putSong(songId, newData) {
      debugger
      const body = { 'songId': songId,'newData': newData };

      fetch(`https://dhapi.achoobert.repl.co/handle/update/${songId}`, {
              method: 'POST',
              body:    JSON.stringify(body),
              headers: { 'Content-Type': 'application/json' },
          })
          .then(res => res.json())
          .then(json => console.log(json));
    }
    // TODO Make new song record
    async putNewSong(songId, newData) {
        const body = { 'songId': songId,'newData': newData };
 
        fetch(`https://dhapi.achoobert.repl.co/handle/new`, {
                method: 'POST',
                body:    JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(json => console.log(json));
    }
    // TODO 
    async deleteSong(songId) {
        const body = { 'songId': songId };
        return "not implemented"
        // fetch('https://dhapi.achoobert.repl.co/handle', {
        //         method: 'POST',
        //         body:    JSON.stringify(body),
        //         headers: { 'Content-Type': 'application/json' },
        //     })
        //     .then(res => res.json())
        //     .then(json => console.log(json));
    }
    // Gets specific songdata based on ID 
    async getSong(songId) {
        return fetch(`https://dhapi.achoobert.repl.co/song/${songId}`)
        .then(res => res.json())
        .then(json => {return json;});
    }
    // TODO fix, very slow 
    // GETs a very large JSON object
    async getSongs() {
        return fetch(`https://dhapi.achoobert.repl.co/songs`)
            .then(res => res.json())
            .then(json => {return json;});
    }
}