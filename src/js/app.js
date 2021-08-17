import $$ from 'dom7';
import Framework7, {
    Template7
} from 'framework7/framework7.esm.bundle.js';

// Import locales
import './locales.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles

import '../css/app.css';

// Import FontAwesome Icons
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

import {
    transpose
} from "./transpose";
Template7.registerHelper('transpose', transpose);

// Import translation tool
import {
    translate
} from "./translate";
Template7.registerHelper('translate', translate);

// get lyric by ID
// (this.tag, parentObject)
Template7.registerHelper('getKeyInParent', function(parent, keyArr) {
    return 'ra';
})
// make a slider div for each language
// (parentObject)
Template7.registerHelper('printLyric', function(line) {
    var results = '<br><br/><br /><br  />'
    for (const key in line.phrases[0]) {
      if (key != "chord" && key != "number") { 
        results = results.concat(`<div  href="#" class="button button-small item-link edit-phrase" style="padding: 5px" @click="lineEditPopup('${key}')">edit ${key}</div><div id="sliderContainer${key}" style="padding: 55px"><div id="slider-${key}" class="slider-${key}"></div></div>`)
      }
    }
    return results;
});
// print all lyrics
// (parentObject)
Template7.registerHelper('printEachPhrase', function(line, languages) {
    console.log(line, languages)
    if (line === undefined) {
        console.error('undefined line')
        return "";
    }
    var results = ''
    const validateChords = `required pattern='[ABCDEFG]|[ABCDEFG]m|[ABCDEFG]#|[ABCDEFG]b|[ABCDEFG]#m|[ABCDEFG]bm|[ABCDEFG]m7|[ABCDEFG]7|[ABCDEFG]sus|[ABCDEFG]#7|[ABCDEFG]#sus|[ABCDEFG]b7|[ABCDEFG]bsus'`
    const validateNumber = `required pattern='1|2|3|4|5|6|7|8|9|10|11|12||'`
    //
    results = results.concat(`<div class="line metadata">`)
    line.phrases.forEach((phrase, index) => {
        results = results.concat(`<div class="phrase metadata phraseMetadata"> `)
        if(phrase["chord"]) {
                if (phrase["chord"]) {
                    results = results.concat(`<div class="chord ${index}"><div class="item-input-wrap"><input class="chord${index}" type="text" ${validateChords} value="${phrase["chord"]}"></div></div>`)
                } else {
                    results = results.concat(`<div class="chord ${index}"><div class="item-input-wrap"><input class="chord${index}" type="text" ${validateChords} placeholder="*"></div></div>`)
                }
                if (phrase["number"]) {
                    results = results.concat(`<div class="number ${index}"><div class="item-input-wrap"><input class="number${index}" type="text" ${validateNumber}value="${phrase["number"]}"></div></div>`)
                } else {
                    results = results.concat(`<div class="number ${index}"><div class="item-input-wrap"><input class="number${index}" type="text" ${validateNumber}placeholder="*"></div></div>`)
                }
            }
            results = results.concat('</div>');
        });
     
    results = results.concat('</div>');

    return results;
})
// print all languages for passed div
// (parentObject)
Template7.registerHelper('printEachLanguage', function(dataArray, languages, name) {
    console.log(dataArray, languages, name)
    var results = '';
    languages.forEach(language => {
        results += `<li class="item-content item-input">`;
        results += `<div class="item-inner">`;
        results += `<div class="item-title item-label">`;
        results += `<t>${language}</t>`;
        results += `</div>`;
        results += `<div class="item-input-wrap">`;
        results += `<textarea name="${name}" class="resizable resizeMe" placeholder="${language}">${dataArray[language]}</textarea>`;
        results += `<span class="input-clear-button"></span>`;
        results += `</div>`;
        results += `</div>`;
        results += `</li>`;
    });

    return results;
})
// print all languages for passed div
// (parentObject)
Template7.registerHelper('printObjectPropertyByKey', function(dataObject, language) {
    if(dataObject && language && dataObject[language]){
        // check if there's supposed to be a space
        let lastIndex = (dataObject[language].length-1);
        let c = dataObject[language][lastIndex]; // last character
        if ((c <= 32 && c >= 0) || c == 127){
            return (dataObject[language].concat( `&nbsp;` ));
        }
        return dataObject[language];
    } 
    return ""
})

var app = new Framework7({
    root: '#app', // App root element
    component: App, // App main component

    name: 'Digital Hymnal', // App name
    theme: 'auto', // Automatic theme detection
    panel: {
        swipe: true
    },
    autoDarkTheme: true,
    // App routes
    routes: routes,
    // Register service worker
    serviceWorker: {
        path: '/service-worker.js',
    },
    navbar: {
        hideOnPageScroll: true,
        iosCenterTitle: false,
    }
});