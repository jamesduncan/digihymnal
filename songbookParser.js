//const dirTree = require("directory-tree");
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
	return fs.appendFile((`./json/${filename}.json`), JSON.stringify(data), function(err) {
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
var converted2 = stringToArray(openFile("./samples/songbooks/KT.txt"))
var converted3 = stringToArray(openFile("./samples/songbooks/CT.txt"))
var converted1 = stringToArray(openFile("./samples/songbooks/AT.txt"))

// mark each array with location of verses and new songs?

// iterate through each array
var mainApp = function (converted1, converted2, converted3){
	// console.log({"first variable is": typeof converted1},
	// 	{"second variable is": typeof converted2},
	// 	{"third variable is": typeof converted3})
	// make blank global-ish variables
	var currentTitle = 'empty file' 
	var song = {}
	song.title = {}
	song.author = ("*")
	song.key = ("*")
	song.lyrics = {}
	song.metadata = []
	song.lyrics.Verse = []
	var currentVerseId = 1
	var currentVerseLabel =''
	var currentVerse = {}
	currentVerse.line = []

	addToVerse = (currentLine) => {
		// if (typeof(currentVerse.line) != Array){
	   // 	currentVerse.line = [] ///////// WHY HAVE TO DO THIS?
		// }
      currentVerse.line.push([{phrase:currentLine}])
	}
	closeVerse = () => {
 		song.lyrics.Verse.push(currentVerse)
 		currentVerseId++
 		currentVerse = {}
 		currentVerse.line = []
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
		song.lyrics.Verse = []
		currentVerse = {}
		currentVerseId = 1
		currentVerse.line = []
 		currentVerse.label = ("verse " + currentVerseId.toString())
 		currentVerse.id = (currentVerseId)
	}
	// this variable means to check for meta-data
	var titleJustCaptured = false
	var firstVerseAdded = false

	//single iterate through all files
	for (var index = 0; index < converted1.length; index++) {
		const line1 = converted1[index];
		const line2 = converted2[index];
		const line3 = converted3[index];
		
		// for one line after capturing title,
		// if line starts with "(" is meta data
		// if next line starts with a numeral or (
		if (titleJustCaptured){
		  let metadataTokens = ["(","(","1","2","3"]
		  if(metadataTokens.includes(line1[0]) || metadataTokens.includes(line1[1])){ // if we got some meta data 
			song.metadata.push({ // save the data
					CT:line1,
					KT:line2,
					AT:line3
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
				console.log({'error data not matching at':index})
				console.log({line1, line2, line3})
			}
			writeToFile({index,line1, line2, line3}, "titlesTest")

			// write old song to disk
			titleJustCaptured = true
			firstVerseAdded = false
			// start saving new data
			currentTitle = (toString(index), ".", line1.slice(a,line1.length)); // this is the song 'number'
			currentVerseLabel = "0"; // placeholder
			song.title = {CT:line1.slice(a, line1.length), // this is the song name in different languages
								KT:line2,
								AT:line3}
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
			addToVerse( {CT:line1.slice(index, line1.length),
								KT:line2.slice(index, line2.length),
								AT:line3.slice(index, line3.length)}
							)
			continue;
		}
		//else{ 
		// if it has no special characters, it must be a normal line
		addToVerse({
			CT:line1,
			KT:line2,
			AT:line3
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


