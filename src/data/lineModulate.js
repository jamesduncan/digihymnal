
//Extracts and replaces a transposed chord from a string ex. Dm7/F# -> D#m7/G
export default class lineModulate {
    constructor() {
        fetch = fetch;
        const splitChar = String.fromCharCode(173);
    }
    lineModulate (line) {
        debugger;
        return chordString.replace(/[A-F][#,\u266D]?/g, (chord) => {
            return transposeChord(chord, steps);
        });
    }
    test(chord) {
        debugger
        let i = flatChords.indexOf(chord);
        a.chords = [{'chord':'A','index':1}]
        a[key] = 'aaa%aaaa%a'
        return
    }
    // line: line object including phrases and languages
    // returns object, with key for each language 'en':{lyrics:"abc",chords['chord','start','len']}
    consolidate(line) {
        //debugger
        var newLine = {}
        line.phrases.forEach((phrase,phraseIndex) => {
            if (Object.hasOwnProperty.call(phrase, 'chord')) {
                var thisChord = phrase.chord
            }
            for (const key in phrase) {
                if (Object.hasOwnProperty.call(phrase, key) && key != 'chord' && key != 'number') {
                    const element = phrase[key];

                    if(newLine[key]){
                        newLine[key].lyric = newLine[key].lyric.concat(element);
                    } else { 
                        newLine[key] = {};
                        newLine[key].lyric = element;
                        newLine[key].chords = [];
                    }

                    // let stringarr = ((typeof element != 'array') ? element.split("") : element[0].split("") );
                    let stringarr
                    if (typeof element == 'array' || typeof element == 'object'){
                        if (!element[1]){
                            stringarr = element[0].split("");
                        } else {
                            stringarr = element;
                        }
                    } else if (typeof element == 'string'){
                        stringarr = element.split("")
                    } 
                    let elementArr = this.diacriticCheckerChord(stringarr, 0) // lets work with the 'true' length array
                    let elementTrueLen = elementArr.length
                    // chordEndIndex = newLine[key].chords.length;

                    if (!thisChord && phraseIndex == 0) { // if first, make a blank chord area
                        newLine[key].chords.push({'chord':'','start':0,'len':elementTrueLen});
                    } else { // totally normal
                        // start adding chord start locations
                        if (newLine[key].chords.length == 0) {
                            newLine[key].chords.push({'chord':'','start':0,'len':elementTrueLen});
                        } else {
                            //chordStartLocations[key].push(chordStartLocations[key][chordEndIndex - 1] + elementAsArray.length);
                            
                            let startarr = this.diacriticCheckerChord(newLine[key].lyric)
                            let startIndex = startarr.length
                            // TODO This needs to be a diacritically checked number
                            // TODO both of these number are 0 or 1

                            newLine[key].chords.push({'chord':'','start':startIndex,'len':elementTrueLen});
                        }
                    }
                }
            }
        });

        // this for each language key:
        //newLine[key].lyric = 'aaa%aaaa%a'
        //newLine[key].chords = [{'chord':'A','start':0,'len':5}]

        return newLine
    }

    combineLines (oldLine, newLine) {
        if (oldLine.length === 0){
            return newLine;
        }
        
        var iNew = 0;
        var iOld = 0;
        var newLineArr = [];
        while( newLine[iNew] || oldLine[iOld] ){
            let newPhrase;
            let i = iNew < iOld ? iNew : iOld // i is smallest
            var oldChordless = ( !Object.hasOwnProperty.call(oldLine[iOld], 'number') );
            var newChordless = ( !Object.hasOwnProperty.call(newLine[iNew], 'number') );
            
            //  first phrase checker
            if (i == 0){ 
                let oldIsMetaless =  oldChordless //&& oldNumberless
                let newIsMetaless = newChordless//&&newNumberless
                if (oldIsMetaless && newIsMetaless){
                    // they match already
                    newPhrase = {
                        ...oldLine[i],
                        ...newLine[i]
                    };
                    iOld++;
                    iNew++;
                } else if (oldIsMetaless){
                    newPhrase = newLine[i];
                    for (const key in oldLine[i]) {
                        if (Object.hasOwnProperty.call(oldLine[i], key) && key != 'chord' && key != 'number') {
                            const element = oldLine[i][key];
                            // only insert a blank, data will be coped in next iteration
                            newPhrase[key] = ''
                        }
                    }
                    // splice(start, deleteCount, item1)
                    // push the index up so it's used in next iteration
                    oldLine.splice(0,0,newPhrase)
                    iOld++;
                } else if (newIsMetaless){
                    // same as this ^^
                    newPhrase = oldLine[i];
                    for (const key in newLine[i]) {
                        if (Object.hasOwnProperty.call(newLine[i], key) && key != 'chord' && key != 'number') {
                            const element = newLine[i][key];
                            newPhrase[key] = ''
                        }
                    }
                    iNew++;
                    newLine.splice(0,0,newPhrase)
                }
            } else {
                newLine[iNew] //{number:1}
                oldLine[iOld] //{en:'hi', number:1,chord:A }
                if (oldChordless == newChordless ){
                    newPhrase = {
                        ...oldLine[iOld],
                        ...newLine[iNew]
                    };
                    iOld++;
                    iNew++;
                } else {
                    
                    if (oldChordless && !newChordless ){
                        //
                        console.error("I don't think this is supposed to happen")
                        newPhrase = oldLine[iOld];
                        delete newLine[iNew].chord; // move number back
                        iOld++;
                        debugger
                    } else if (newChordless  && !oldChordless ){
                        //
                        console.error("I don't think this is supposed to happen")
                        newPhrase = newLine[iNew];
                        delete oldLine[iOld].chord; // move number back
                        iNew++;
                        debugger
                    } else if (!oldChordless && !newChordless ){
                        //
                        console.error("I don't think this is supposed to happen")
                        debugger
                    } else {
                        if ( iNew < iOld ){
                            newPhrase = newLine[iNew];
                            iNew++;
                        } else if ( iNew > iOld ){
                            newPhrase = oldLine[iOld];
                            iOld++;
                        }else {
                            debugger
                            alert("Hello! I am an alert box!!");
                            console.error("paradox, who wins?")
                            throw new Error;
                        }
                    }
                }
            }
            newLineArr.push(newPhrase);
            
        }
        return newLineArr
    }

    diacriticCheckerChord (langArray, index) {
        if (!index) {index = 0};
        if (typeof(langArray)=='string') {
            langArray = langArray.split("");
        }
        var nextIndex = index + 1
        if (nextIndex >= langArray.length) {
            return langArray;
        }
        //if ([' ྱ', ' ེ', ' ོ', ].includes(langArray[nextIndex])){
        // or if phrase is lead with a number marker
        if ( [4017, 3962, 3964, 3954, 173].includes((langArray[nextIndex]).charCodeAt(0) )){
            // this grabs the next, don't iterate the index
            langArray[index] = langArray[index].concat(langArray.splice(nextIndex, 1)[0]);
        } else if ( 173 === (langArray[index]).charCodeAt(0) ) { 
            // this looks at current index. Must iterate if one is caught
            langArray[index] = langArray[index].concat(langArray.splice(nextIndex, 1)[0]);
            ++index;
        } else { // only increase if no diacritic
            ++index;
        }
        return this.diacriticCheckerChord(langArray, index);
    }
    diacriticChecker (langArray, index) {
        if (!index) {index = 0};
        if (typeof(langArray)=='string') {
            langArray = langArray.split("");
        }
        var nextIndex = index + 1
        if (nextIndex >= langArray.length) {
            return langArray;
        }
        //if ([' ྱ', ' ེ', ' ོ', ].includes(langArray[nextIndex])){
        if ([4017, 3962, 3964, 3954].includes((langArray[nextIndex]).charCodeAt(0))) {
            langArray[index] = langArray[index].concat(langArray.splice(nextIndex, 1)[0]);
        } else { 
            ++index;
        }
        return this.diacriticChecker(langArray, index);
    }
}

