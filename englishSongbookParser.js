//const dirTree = require("directory-tree");
/*
Above All

A		    E/D-D   Esus - E		   A		A2
Above all powers, 		above all kings,
   A		   E/D-D		    Esus	    E		A
Above all nature and all created things.
    A	    F#m			Amaj7			 D	  A
Above all wisdom and all the ways of man,
Bm7			     D				  E	  A
You were here before the world began.

    A		E/D-D	Esus	    E			A		A2
Above all kingdoms, 		above all thrones,
    A		E/D-D		 Esus		E	   A
Above all wonders the world has ever known.
    A		F#m		Amaj7			  D		A
Above all wealth and treasures of the earth,
Bm7				   D					   C#sus/G#
There's no way to measure what You're worth.


(chorus)
A	  Bm7   E				A
Crucified, laid behind the stone,
			  Bm7    E			  A
You lived to die, rejected and alone.
A	     F#m  Amaj7				D		A
Like a rose trampled on the ground,
			  Bm7  A			   D2 - E	     A (D-Es-E-A-D-A)
You took the fall and thought of me, 	above all.

*/
array.forEach(element => {
  
});

var fs = require('fs');
const { stringify } = require("querystring");
var parseDir = function (path) {
  // an npm module that makes a tree out of a dir
  var currDir = dirTree(path);
  //return currDir
  currDir.children.forEach(element => {
    openFile(element.path)
  });
};
// opens file, returns array.
function openFile(path){
	//var fs = require('fs');
	return fs.readFileSync(path, 'ucs2')
}

function resetFile(filename){
	try{
	  output = (``)
 
	  // Output the file...
	  fs.writeFile((`./${filename}.json`), output, function(err) {
		 if (err) {
			  console.log(err);
		 }
	  });
 
	} catch (e) {
	  console.error(e.message);
	}
 }
function writeToFile(data, filename){
	// Output the file...
	fs.appendFileSync((`./js/${filename}.js`), "export default", function(err) {
		if (err) {
			console.log(err);
		}
	})
	return fs.appendFile((`./js/${filename}.js`), JSON.stringify(data), function(err) {
		if (err) {
			console.log(err);
		}
	});

}
// FEED ME YOUR    T E S T    D A T A
//parseDir("D:/schubert.dev/parser/samples")

// TODO I'm only checking the first character here right? don't have double chars
const MARKERCHARACTERS = ["S","A","1","2","3","4","5","6","7","8","9","༡","༢","༣","༤","༥","༦","༧","༨","༨","༩","༡","༡"]
//var newVerseCue = ["1","2","3","4","5","6","7","8","9",10,11,12,13,14,15,16,17,18,19,20,21,"༡","༢","༣","༤","༥","༦","༧","༨","༨ ཁ","༩ ཀ","༡༠ ཁ"]

// find out if the verse indicator takes up more than one character
function getVerseIndex(line,i){
	var newVerseCue = ["1","2","3","4","5","6","7","8","9","༡","༢","༣","༤","༥","༦","༧","༨","༨"," ","ཁ","༩","ཀ","༡","༠","ཁ"]
	if(newVerseCue.includes(line[i])){ // new verse
		return getVerseIndex(line,++i)
	}else{
		return i
	}
}
function checkTitle(line,i){
	if(i>6){
		//console.log("Returning false")
 	  return {isTitle:false}
	}
   if(line[i] == '.'){
		//console.log("Returning true")
		// console.log({"this is title":line, "at":i})
   	return {isTitle:true,songNumberIndex:i}
   }
   //if (MARKERCHARACTERS.includes(line[i])){
	return checkTitle(line,++i)
   //}
}

// convert very long string into array
// array of each new line
function stringToArray(longString){
    // Clean any un-needed characters
    function cleanString(input) {
      // TODO strip out all '/t'
		input = input.replace(/([\t])/g, '');
		// this fixes the splitter, I don't know why
		input = input.replace(/([\r])/g, '');
		// TODO remove empty line? no idea if really working
		input = input.replace(/^\s*[\r\n]/gm)
		// var output = ''
      // for (var i=0; i<input.length; i++) {
      //  if (input.charCodeAt(i) <= 127) {
      //    output += input.charAt(i);
      //  }
      // }
      // return output;
		return input;
 	}
  	longString = cleanString(longString)
  	return longString.split(/\r?\n/)
}

// get real data from text files
var converted1 = stringToArray(openFile("./samples/songbooks/AT.txt"))
var converted2 = stringToArray(openFile("./samples/songbooks/KT.txt"))
var converted3 = stringToArray(openFile("./samples/songbooks/CT.txt"))

var songIndex = 0

// mark each array with location of verses and new songs?

// iterate through each array
var mainApp = function (converted1, converted2, converted3){
	// console.log({"first variable is": typeof converted1},
	// 	{"second variable is": typeof converted2},
	// 	{"third variable is": typeof converted3})
	// make blank global-ish variables
	var currentTitle = 'empty file' 
	var song = {}
	var id = 0
	song.title = {}
	song.author = ("*")
	song.key = ("*")
	song.lyrics = {}
	song.metadata = []
	song.lyrics.verses = []
	var currentVerseId = 1
	var currentVerseLabel =''
	var currentVerse = {}
	currentVerse.lines = []

	addToVerse = (currentLine) => {
		// if (typeof(currentVerse.line) != Array){
	   // 	currentVerse.line = [] ///////// WHY HAVE TO DO THIS?
		// }
      currentVerse.lines.push({phrases:[currentLine]})
	}
	closeVerse = () => {
 		song.lyrics.verses.push(currentVerse)
 		currentVerseId++
 		currentVerse = {}
 		currentVerse.lines = []
 		currentVerse.label = ("verse " + currentVerseId.toString())
 		currentVerse.id = (currentVerseId)
	}

	// Output the file...
	function closeSong(output, filename){
		closeVerse()
		
		//console.log({"closing": filename})
		writeToFile(output, filename)

		//clear stuff out
		song.author = ("*")
		song.key = ("*")
		song.lyrics = {}
		song.metadata = []
		song.lyrics.verses = []
		currentVerse = {}
		currentVerseId = 1
		currentVerse.lines = []
 		currentVerse.label = ("verse " + currentVerseId.toString())
 		currentVerse.id = (currentVerseId)
	}
	// this variable means to check for meta-data
	var titleJustCaptured = false
	var firstVerseAdded = false

	//single iterate through all files
	for (var index = 0; index < converted1.length; index++) {
		const line1 = converted1[index];
		var line2 = converted2[index];
		var line3 = converted3[index];
		
		// get rid of "undefined" at start of string
		// caused by the deletion of a line in source data.
		// easier to delete here than to fix regx
		// var annoyingString = ['undefined']
		//console.log(typeof(line2))
		if (line2 != undefined && line3 != undefined){
			let letter = line2[0]
			if (letter=="u"){
				line2 = line2.slice(9, line2.length)
			}
			letter = line3[0]
			if (letter=="u"){
				line3 = line3.slice(9, line3.length)
			}
		}

		// for one line after capturing title,
		// if line starts with "(" is meta data
		// if next line starts with a numeral or (
		if (titleJustCaptured){
		  let metadataTokens = ["(","(","1","2","3"]
		  if(metadataTokens.includes(line1[0]) || metadataTokens.includes(line1[1])){ // if we got some meta data 
			song.metadata.push({ // save the data
					at:line1,
					kt:line2,
					ct:line3
				})
			continue; // exit the loop, data has been captured
		  }else{
			  titleJustCaptured = false
		  }
		}

		// If there is a "."
		// it is a title -- I manually marked the data with them. 
		var a, isTitle = false
		if(line1[1] == "."){
			a = 2
			isTitle = true
		}else if(line1[2] == "."){
			a = 1
			isTitle = true
		}else if(line1[0] == "."){
			a = 1
			isTitle = true
		}
		if(isTitle){
			closeSong(song,currentTitle)
			let tData = checkTitle(line1,a) // check if it is a title	and clip out '.'
			//console.log({"this is title":line1, "at":index})
			// debugger thing here
			let line1Default = line1.slice(a, line1[tData.songNumberIndex])
			if(line1Default != line2.slice(0, line2[tData.songNumberIndex]) || line1Default !=line3.slice(0, line3[tData.songNumberIndex])){
				console.log({'WARNING input data not matching at':index,'at':line1, 'kt':line2,'ct': line3})
			}
			//writeToFile({index,line1, line2, line3}, "titlesTest")

			// write old song to disk
			titleJustCaptured = true
			firstVerseAdded = false
			// start saving new data
			currentTitle = (toString(index), ".", line1.slice(a,line1.length)); // this is the song 'number'
			song.id = (`${songIndex}`)
			songIndex += 1;
			currentVerseLabel = "0"; // placeholder
			song.title = {at:line1.slice(a, line1.length), // this is the song name in different languages
								kt:line2,
								ct:line3}
			continue;	
		}

		// if there are fancy characters, is verse
		if(MARKERCHARACTERS.includes(line1[0]) || MARKERCHARACTERS.includes(line1[1])){// If it isn't a new song, it must be a new verse
			if (firstVerseAdded){ // don't add a blank verse
				closeVerse()// make new verse object
			} else{
				firstVerseAdded = true
			}
			// start saving new data
			let index = getVerseIndex(line1,1) // this should be the symbol's location
			currentVerseLabel = line1.slice(0,index); // this is the verse 'number'
			// this is the phrase - after the new-verse marker
			// if(typeof(line2) == 'undefined'){
			// 	continue;
			// }
			addToVerse( {at:line1.slice(index, line1.length),
								kt:line2.slice(index, line2.length),
								ct:line3.slice(index, line3.length)}
							)
			continue;
		}
		//else{ 
		// if it has no special characters, it must be a normal line
		addToVerse({
			at:line1,
			kt:line2,
			ct:line3
		})
		continue;
		//}
	}

	// write last item
	closeSong(song,currentTitle)
	writeToFile({currentVerse}, "titlesTest")

}

// call the main function
console.log(mainApp(converted1, converted2, converted3))


