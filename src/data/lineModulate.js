//Currently only support # not . Can extend in future.
const chords = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const flatChords = ["C","D♭","D","E♭","F♭","F","G♭","G","A♭","A","B♭","C♭"];

function transposeChord (chord, steps) {
  //Check if chord is flat (\u266D - unicode ♭)
  if (/[A-F]\u266D/.test(chord)) {
  	chord = convertFlat(chord)
  }
  let index = chords.indexOf(chord) + steps;
  index = index < 0 ? index + 12 :
          index >= 12 ? index - 12 : index;
  return chords[index];
}

//Extracts and replaces a transposed chord from a string ex. Dm7/F# -> D#m7/G
export default class lineModulate {
    constructor() {
        fetch = fetch;
        const string = 'hello world';
    }
    lineModulate (line) {
        debugger;
        return chordString.replace(/[A-F][#,\u266D]?/g, (chord) => {
            return transposeChord(chord, steps);
        });
    }
    convertWhole(chord) {
        debugger
        let i = flatChords.indexOf(chord);
        a.chords = [{'chord':'A','index':1}]
        a[key] = 'aaa%aaaa%a'
        return
    }
    consolidate(line) {
        debugger
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
                    
                    let stringarr = ((typeof element != 'array') ? element.split("") : element[0].split("") );
                    let elementArr = this.diacriticCheckerChord(stringarr, 0) // lets work with the 'true' length array
                    let elementTrueLen = elementArr.length
                    //chordEndIndex = newLine[key].chords.length;

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

        //newLine[key].lyric = 'aaa%aaaa%a'
        //newLine[key].chords = [{'chord':'A','start':0,'len':5}]

        return newLine
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
        if ( ([4017, 3962, 3964, 3954, 173].includes((langArray[nextIndex]).charCodeAt(0))) || ( 173 === (langArray[index]).charCodeAt(0) ) ){
            langArray[index] = langArray[index].concat(langArray.splice(nextIndex, 1)[0]);
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
        } //else if ([173].includes((langArray[nextIndex]).charCodeAt(0))) {
            // remove our number markers
           // console.error("This should be getting split?")
            //debugger
            //langArray.splice(index, 1)[0]; 
        //} 
        else { // only increase if no diacritic
            ++index;
        }
        return this.diacriticChecker(langArray, index);
    }
}

