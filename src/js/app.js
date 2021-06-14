import $$ from 'dom7';
import Framework7,  { Template7 }  from 'framework7/framework7.esm.bundle.js';

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

import { transpose } from "./transpose";
Template7.registerHelper('transpose', transpose);

// Import translation tool
import { translate } from "./translate";
Template7.registerHelper('translate', translate);

// get lyric by ID
// (this.tag, parentObject)
Template7.registerHelper('getKeyInParent', function (parent,keyArr){
  return 'ra';
})
// print all lyrics
// (parentObject)
Template7.registerHelper('printLyric', function (line, showChord, showNumber){
  console.log(line)
  // <div class="phrase {{#if @root.showNumber}}{{else}}noNumbers{{/if}} {{#if @root.showChord}}{{else}}noChords{{/if}}">
  var results = '<div class="line">'
  
  line.phrases.forEach(phrase => {
    ///
    // Validators
    const validateChords = `required pattern='[ABCDEFG]|[ABCDEFG]m|[ABCDEFG]#|[ABCDEFG]b|[ABCDEFG]#m|[ABCDEFG]bm|[ABCDEFG]7|[ABCDEFG]sus|[ABCDEFG]#7|[ABCDEFG]#sus|[ABCDEFG]b7|[ABCDEFG]bsus'`
    const validateNumber = `required pattern='1|2|3|4|5|6|7|8|9|10|11|12'`
    ///

    results = results.concat(`<div class="phrase"> `)
    for (const key in phrase) {
      if(phrase["chord"]){
        results = results.concat(`<div class="chord"><div class="item-input-wrap"><input type="text" value="${phrase["chord"]} ${validateChords}"></div></div>`)
      } else {
        //results = results.concat(`<div class="chord item-input-wrap"><input type="text" placeholder="*"></div>`)
        results = results.concat(`<div class="chord"><div class="item-input-wrap"><input type="text" ${validateChords} placeholder="*"></div></div>`)
        //results = results.concat(`<div class="chord">*</div>`)
      }
      if(phrase["number"]){
        results = results.concat(`<div class="number"><div class="item-input-wrap"><input type="text" ${validateNumber}value="${phrase["number"]}"></div></div>`)
      }else {
        results = results.concat(`<div class="number"><div class="item-input-wrap"><input type="text" ${validateNumber}placeholder="*"></div></div>`)
      }
      if (Object.hasOwnProperty.call(phrase, key)) {
        const element = phrase[key];
        if(key != "chord" && key != "number"){
          results = results.concat(`<div class="lyrics ${key}"><div class="item-input-wrap"><input type="text" value="${element}&nbsp;"></div></div>`)
        }
      }
    }
    results = results.concat('</div>')
  });
  return results.concat('</div>');
})
// print all lyrics
// (parentObject)
Template7.registerHelper('printEachPhrase', function (line, languages){
  console.log(line, languages)
  //debugger;
  var results = ''
  const validateChords = `required pattern='[ABCDEFG]|[ABCDEFG]m|[ABCDEFG]#|[ABCDEFG]b|[ABCDEFG]#m|[ABCDEFG]bm|[ABCDEFG]7|[ABCDEFG]sus|[ABCDEFG]#7|[ABCDEFG]#sus|[ABCDEFG]b7|[ABCDEFG]bsus'`
  const validateNumber = `required pattern='1|2|3|4|5|6|7|8|9|10|11|12'`
  //
  languages.forEach(language => {
    results = results.concat(`<div class="line ${language}">`)
    line.phrases.forEach(phrase => {
      results = results.concat(`<div class="phrase ${language}"> `)

        if(phrase["chord"]){
          results = results.concat(`<div class="chord"><div class="item-input-wrap"><input type="text" value="${phrase["chord"]} ${validateChords}"></div></div>`)
        } else {
          results = results.concat(`<div class="chord"><div class="item-input-wrap"><input type="text" ${validateChords} placeholder="*"></div></div>`)
        }
        if(phrase["number"]){
          results = results.concat(`<div class="number"><div class="item-input-wrap"><input type="text" ${validateNumber}value="${phrase["number"]}"></div></div>`)
        }else {
          results = results.concat(`<div class="number"><div class="item-input-wrap"><input type="text" ${validateNumber}placeholder="*"></div></div>`)
        }
        if(phrase[language]){
          results = results.concat(`<div class="lyrics ${language}"><div class="item-input-wrap"><input type="text" value="${phrase[language]}&nbsp;"></div></div>`)
        }else{
          results = results.concat(`<div class="lyrics ${language}"><div class="item-input-wrap"><input type="text" value="*"></div></div>`)
        }

      
      results = results.concat('</div>')
    });
    results = results.concat('</div>');
  });
  
  return results;
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