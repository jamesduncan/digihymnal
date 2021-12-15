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
        results = results.concat(`<div  href="#" class="button button-small item-link edit-phrase" style="padding: 5px" @click="lineEditPopup('${key}')">edit ${key}</div><div id="sliderContainer-${key}" style="padding: 55px"><div id="slider-${key}" class="slider-${key}"></div></div>`)
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
Template7.registerHelper('printEachNumber', function(numbers) {
    console.log(numbers)
    if (numbers === undefined) {
        console.error('undefined line')
        return "";
    }
    var results = ''
    //
    results = results.concat(`<div class="line metadata">`)
    numbers.forEach((number, index) => {
        results = results.concat(`<div class="phrase metadata phraseMetadata"> `)
        if(number) {
                if (number) {
                    results = results.concat(`<div class="number ${index} number-${index}"><div class="item-input-wrap"><input class="number${index}" type="text" value="${number}"></div></div>`)
                } else {
                    results = results.concat(`<div class="number ${index} number-${index}"><div class="item-input-wrap"><input class="number${index}" type="text" placeholder=""></div></div>`)
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
    var numberIndex = 0

    dataObjectLine.phrases.forEach( phrase => {
        // all phrases but first Must have chord
        // all phrases MAY have number (we only check if bool is passed)
        // a phrase is a mini-line
        // a phrase does not Have to start with a number
        // the last number in a phrase will include the rest of the lyrics in that phrase.
        var phraseHtml = phraseHtmlTemplate;
        
        if ( phrase.chord && showChords){
            // TODO transpose this
            phraseHtml += `<div class="chord">${phrase.chord}</div>`
        }

        function addLyric (lyric1, language1, lyric2, language2){
            // there are no nums, build normally
            var lyric = `<div class="lyrics ${language1}">`;
            lyric += forceSpace(lyric1);
            lyric += `</div>`;
            
            if (typeof lyric2 != 'undefined'){
                lyric = `<div class="lyrics ${language2}">`;
                lyric += forceSpace(lyric2);
                lyric += `</div>`;
            }

            //lyric += `</div>`; // don't close the phrase
            return lyric;
        }

        var lyric1 = phrase[language1];
        var lyric1NumArr = getAllIndexes(lyric1, String.fromCharCode(173)) //  invisible character
        if (typeof language2 != 'undefined'){
            var lyric2 = phrase[language2];
            var lyric2NumArr = getAllIndexes(lyric2, String.fromCharCode(173))
        }
        if ( hasNum && lyric1NumArr.length && showNumbers) {
            lyric1NumArr.forEach( (number,index) => {
                // if the first one isn't 0 that means some lyrics need to not have a number on them.
                if ( index === 0 && number != 0 ) {
                    let miniPhrase1 = lyric1.slice(0,lyric1NumArr[index]);
                    if (language2) {
                        var miniPhrase2 = lyric2.slice(0, lyric2NumArr[index]);
                    }
                    // this is going to be nestled up with the chord, no number
                    phraseHtml += addLyric(miniPhrase1, language1, miniPhrase2, language2);
                }

                phraseHtml += `<div class="number num${numberIndex}">${numberArray.slice(numberIndex,numberIndex+1)}</div>`
                
                let next = ( lyric1NumArr[index+1] ? lyric1NumArr[index+1] : lyric1.length ); // end index of current miniphrase, either next number or all the remaining lyrics
                let miniPhrase = lyric1.slice( number,next )
                if (typeof language2 != 'undefined'){
                    let next = ( lyric2NumArr[index+1] ? lyric2NumArr[index+1] : lyric2.length ); // end index of current miniphrase, either next number or all the remaining lyrics
                    var miniPhrase2 = lyric2.slice(lyric2NumArr[index],next)
                }

                phraseHtml += addLyric(miniPhrase, language1, miniPhrase2, language2);  

                phraseHtml += `</div>`
                finalLineHtml += phraseHtml;  
                phraseHtml = phraseHtmlTemplate; 
                numberIndex = 1+numberIndex     
            });
        } else {
            // there are no nums, build normally
            phraseHtml += addLyric(lyric1, language1, lyric2, language2);  

            phraseHtml +=  `</div>` //  close the phrase
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