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

import {
    numbers
} from "./numbers";
Template7.registerHelper('numbers', numbers);

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
    // console.log(line, languages)
    // if (line === undefined) {
    //     console.error('undefined line')
    //     return "";
    // }
    // var results = ''
    // const validateChords = `required pattern='[ABCDEFG]|[ABCDEFG]m|[ABCDEFG]#|[ABCDEFG]b|[ABCDEFG]#m|[ABCDEFG]bm|[ABCDEFG]m7|[ABCDEFG]7|[ABCDEFG]sus|[ABCDEFG]#7|[ABCDEFG]#sus|[ABCDEFG]b7|[ABCDEFG]bsus'`
    // const validateNumber = `required pattern='1|2|3|4|5|6|7|8|9|10|11|12||'`
    // //
    // results = results.concat(`<div class="line metadata">`)
    // line.phrases.forEach((phrase, index) => {
    //     results = results.concat(`<div class="phrase metadata phraseMetadata"> `)
    //     if(phrase["chord"]) {
    //             if (phrase["chord"]) {
    //                 results = results.concat(`<div class="chord ${index}"><div class="item-input-wrap"><input class="chord${index}" type="text" ${validateChords} value="${phrase["chord"]}"></div></div>`)
    //             } else {
    //                 results = results.concat(`<div class="chord ${index}"><div class="item-input-wrap"><input class="chord${index}" type="text" ${validateChords} placeholder="*"></div></div>`)
    //             }
    //             if (phrase["number"]) {
    //                 results = results.concat(`<div class="number ${index}"><div class="item-input-wrap"><input class="number${index}" type="text" ${validateNumber}value="${phrase["number"]}"></div></div>`)
    //             } else {
    //                 results = results.concat(`<div class="number ${index}"><div class="item-input-wrap"><input class="number${index}" type="text" ${validateNumber}placeholder="*"></div></div>`)
    //             }
    //         }
    //         results = results.concat('</div>');
    //     });
     
    // results = results.concat('</div>');

    return 'no';
})
// print all numbers
// (parentObject)
Template7.registerHelper('printEachNumber', function(line) {
    console.log(line)
    if (line === undefined) {
        console.error('undefined line')
        return "";
    }
    var results = ''
    //
    results = results.concat(`<div class="line metadata">`)
    line.phrases.forEach((phrase, index) => {
        results = results.concat(`<div class="phrase metadata phraseMetadata"> `)
        if(phrase["number"]) {
                if (phrase["number"]) {
                    results = results.concat(`<div class="number ${index}"><div class="item-input-wrap"><input class="number${index}" type="text" value="${phrase["number"]}"></div></div>`)
                } else {
                    results = results.concat(`<div class="number ${index}"><div class="item-input-wrap"><input class="number${index}" type="text" placeholder=""></div></div>`)
                }
            }
            results = results.concat('</div>');
        });
     
    results = results.concat('</div>');

    return results;
})
// print all chords
// (parentObject)
Template7.registerHelper('printEachChord', function(line) {
    console.log(line)
    if (line === undefined) {
        console.error('undefined line')
        return "";
    }
    var results = ''
    const validateChords = `required pattern='[ABCDEFG]|[ABCDEFG]m|[ABCDEFG]#|[ABCDEFG]b|[ABCDEFG]#m|[ABCDEFG]bm|[ABCDEFG]m7|[ABCDEFG]7|[ABCDEFG]sus|[ABCDEFG]#7|[ABCDEFG]#sus|[ABCDEFG]b7|[ABCDEFG]bsus'`
    results = results.concat(`<div class="line metadata">`)
    line.phrases.forEach((phrase, index) => {
        results = results.concat(`<div class="phrase metadata phraseMetadata"> `)
        if(phrase["chord"]) {
                if (phrase["chord"]) {
                    results = results.concat(`<div class="chord ${index}"><div class="item-input-wrap"><input class="chord${index}" type="text" ${validateChords} value="${phrase["chord"]}"></div></div>`)
                } else {
                    results = results.concat(`<div class="chord ${index}"><div class="item-input-wrap"><input class="chord${index}" type="text" ${validateChords} placeholder="*"></div></div>`)
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
// print line
// {{#each phrases}}
// <!-- {%am%az%ing %grace} {%how %s}{%weet %the}{ %sound} -->
//     <div class="phrase {{#if @root.showNumber}}{{else}}noNumbers{{/if}} {{#if @root.showChord}}{{else}}noChords{{/if}}">
//         {{#if chord}}
//             {{#if @root.showChord}}
//                 <div class="chord">{{transpose chord @root.steps}}</div>
//             {{/if}}
//         {{/if}}
//         <!-- @root.showNumber -->
//         <div class="lyric">{{printObjectPropertyByKey this @root.lyric1 true ../numbers}}</div>  
//         {{#if @root.showLyric2}}
//             <div class="lyric">{{printObjectPropertyByKey this @root.lyric2 }}</div>
//         {{/if}}
//     </div>
// {{/each}}

Template7.registerHelper('printLine', function(dataObjectLine, language1, showChords, showNumbers, steps, language2) {
    // this @root.lyric1 @root.showChord @root.showNumber @root.steps @root.lyric2 
    var finalLineHtml = ''
    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }
    function forceSpace(lyricString){
        let lastIndex = (lyricString.length-1);
        let c = lyricString[lastIndex]; // last character
        if ((c <= 32 && c >= 0) || c == 127){
            lyricString +=`&nbsp;`
        }
        c = lyricString[0]; // last character
        if ((c <= 32 && c >= 0) || c == 127){
            lyricString = `&nbsp;${lyricString}`
        }
        return lyricString
    }
    
    var phraseHtmlTemplate = `<div class="phrase`
    if ( !showNumbers ){
        phraseHtmlTemplate+=' noNumbers'
    }
    if ( !showChords ){
        phraseHtmlTemplate+=' noChords'
    }
    phraseHtmlTemplate+=`">`
    
    if( dataObjectLine.numbers ){
        var numberArray = dataObjectLine.numbers // array
        var hasNum = true     
    } else {
        debugger
    }
    var lyric2numIndex = 0 
    var numberIndex = 0

    dataObjectLine.phrases.forEach( phrase => {
        var phraseHtml = phraseHtmlTemplate;
        
        if ( phrase.chord && showChords){
            // TODO transpose this
            phraseHtml += `<div class="chord">${phrase.chord}</div>`
        }

        if ( hasNum ) {
            var lyric1 = phrase[language1];
            var lyric2 = phrase[language2];
            var lyric1NumArr = getAllIndexes(lyric1, String.fromCharCode(173)) //  invisible character
            
            
            if (lyric1NumArr.length && showNumbers){
                var lastnum1 = 0
                
                lyric1NumArr.forEach( (number,index) => {
                    phraseHtml += `<div class="number num${numberIndex}">${numberArray.slice(0,1)}</div>`
                    
                    var lyric = `<div class="lyric ${language1}">`
                    number = (index != lyric1NumArr.length-1 ) ? number : phrase[language1].length
                    let miniPhrase = phrase[language1].slice(0,number-lastnum1)
                    miniPhrase = miniPhrase.replaceAll(String.fromCharCode(173), '')//  invisible character
                    lyric += forceSpace(miniPhrase)
                    lyric += `</div>`
                    phraseHtml += lyric
                    //
                    if (typeof language2 != 'undefined'){
                        var lastnum2 = 0
                        var lyric2NumArr = getAllIndexes(lyric2, String.fromCharCode(173))
                        // miniPhrase = lyric2NumArr[index] ? phrase[language2].slice(0,lyric2NumArr[index]-lastnum2) : phrase[language2]
                        // miniPhraseLen = lyric2NumArr[index]? lyric2NumArr[index]-lastnum2 : phrase[language2].length
                        let miniPhraseLen = (index != lyric1NumArr.length-1 && lyric2NumArr[index]) ? lyric2NumArr[index]-lastnum2 : phrase[language2].length
                        lyric = `<div class="lyric ${language2}">`
                        miniPhrase = phrase[language2].slice(0,miniPhraseLen)
                        miniPhrase = miniPhrase.replaceAll(String.fromCharCode(173), '')
                        lyric += forceSpace(miniPhrase)
                        lyric += `</div>`
                        phraseHtml += lyric
                    }
                    //
                    phraseHtml += `</div>`
                    finalLineHtml += phraseHtml;  
                    phraseHtml = phraseHtmlTemplate; 
                    numberIndex = 1+numberIndex     
                });
                
            } else {
                // there should be nums, there arent any here
                var lyric = `<div class="lyric">`
                let miniPhrase = phrase[language1].replaceAll(String.fromCharCode(173), '')
                lyric += forceSpace(miniPhrase)
                lyric += `</div>`
                phraseHtml += lyric

                if (typeof language2 != 'undefined'){
                    lyric = `<div class="lyric ${language2}">`
                    miniPhrase = phrase[language2]
                    miniPhrase = miniPhrase.replaceAll(String.fromCharCode(173), '')
                    lyric += forceSpace(miniPhrase)
                    lyric += `</div>`
                    phraseHtml += lyric
                }

                phraseHtml +=  `</div>`
                finalLineHtml += phraseHtml;
            }
        } else {
            // there are no nums, build normally
            var lyric = `<div class="lyric">`
            lyric += forceSpace(phrase[language1])
            lyric += `</div>`
            phraseHtml += lyric

            if (typeof language2 != 'undefined'){
                lyric = `<div class="lyric ${language2}">`
                lyric += forceSpace(phrase[language2])
                lyric += `</div>`
                phraseHtml += lyric
            }

            phraseHtml +=  `</div>`
            finalLineHtml += phraseHtml;
        }
    });
    return finalLineHtml
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