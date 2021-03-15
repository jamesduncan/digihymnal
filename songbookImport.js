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


function stringToArray(longString){
	// Clean any un-needed characters
	function cleanString(input) {
	  // TODO strip out all '/t'
	  var output = "";
	  var output = input.replace(/([\t])/g, '');
	  // TODO remove empty line? no idea if really working
	  output = output.replace(/^\s*[\r\n]/gm)
	  //for (var i=0; i<input.length; i++) {
	  //  if (input.charCodeAt(i) <= 127) {
	  //    output += input.charAt(i);
	  //  }
	  //}
	  return output;
	}
	longString = cleanString(longString)
	// console.log(longString)
	return longString.split(/\r?\n/)
}
function writeToFile(data, filename){
	try{
	  output = (`${JSON.stringify(data)}\n`)
 
	  // Output the file...
	  fs.appendFile((`./json/${filename}.json`), output, function(err) {
		 if (err) {
			  console.log(err);
		 }
	  });
	  console.log(`wrote file to: ./${filename}.json`)
	} catch (e) {
	  console.error(e.message);
	}
 }

function openFile(path){
  var fs = require('fs');
  fs.readFile(path, 'ucs2', function(err, data) {
      if (err) throw err;
      var filename = path.split("/").pop()
      filename = path.split("\\").pop()
		// I need the extension for now...
		// filename = filename.split(".").shift()
		
		// do this again for good measure I guess?
		filename = path.split("/").pop()
		//filename += (".json")
		console.log(filename)

		// lets clean the data real fast
		// do it in function... 
		//stringToArray(data)

		// write data to a file
      writeToFile(stringToArray(data), filename);
  });
}
openFile("./samples/songbooks/AT.txt")
openFile("./samples/songbooks/KT.txt")
openFile("./samples/songbooks/CT.txt")
//openFile(".\samples\songbooks\CT.doc")
//openFile(".\samples\songbooks\CT.txt")

// //this will parse XML file
// function onSong2JSON(data1, data2, data3) {

//   // go through each whole file
//   // // save all songs from each file
//   // // re-combine all songs
  
//   // each phrase from each file, output save of whole song
//   // each verse from each file, output save of whole song
//   //Every time there is a hindi-character number character at the start of a line, that is a new verse
  
//   // song from each file, output save of whole song

//   try {
//     var song = {};
    
//     var removeSpaces = /\s+,"-"/
//     //str = str.trim().replaceAll("\\s+", " ");
//     //song.id = filename.replace(/\s+/g, "_")
//     //song.id = (filename)

//     // Clean any un-needed characters
//     function cleanString(input) {
//       //  TODO strip out all '/t'
//       var output = "";
//       var output = input.replace(/([\t])/g, '');
//       //for (var i=0; i<input.length; i++) {
//       //  if (input.charCodeAt(i) <= 127) {
//       //    output += input.charAt(i);
//       //  }
//       //}
//       return output;
//     }
//     data = cleanString(data)
  

//     // select the first three lines
//     // [0] is the whole dataset, first line is '1'
//     var dataArray = data.split(/\r?\n/)
//     //var getMetaLines = /(.*?)\n(.*?)\n(.*?)\n(.*)/
//     // first line
//     //song.title = (getMetaLines.exec(data)[1])
//     currentTitle = dataArray[0] 
//     song.title = ({"en":currentTitle})
//     // second line
//     //song.author = (getMetaLines.exec(data)[2])
//     song.author = (dataArray[1])
//     // third line skip "Key: " 
//     var selectKey = /(?![Key: ])(.*)/
//     //console.log(selectKey.exec("Key: G#")[0])
//     //console.log(selectKey.exec("Key: C")[0])
//     //song.key = (selectKey.exec(getMetaLines.exec(data)[3])[0])
//     song.key = ('')

    
//     song.lyrics = {}
//     song.lyrics.Verses = []

//     // TODO I'm assuming data starts on 5th line
//     let lyricsStart = 4
//     // Make array of just lyrics
//     var toBeParsed = dataArray.splice(lyricsStart)
//     //console.log(lyrics)

//     // A temporary variable that toBeParsed calls
//     var currentVerse = {}
//     currentVerse.lines = []
//     // TODO use label, using a number for now
//     var currentVerseLabel = 1
//     currentVerse.label = ("verse " + currentVerseLabel.toString())
//     // add a set of phrases (line) to the verse
//     function addToVerse(currentLine){
//       currentVerse.lines.push({phrases:currentLine})
//     }

//     // close the verse, push it to the song, and clear it
//     function closeVerse(){
      
//       song.lyrics.Verses.push(currentVerse)
//       currentVerseLabel++
//       currentVerse = {}
//       currentVerse.lines = []
//       currentVerse.label = ("verse " + currentVerseLabel.toString())
//     }
    
//     // parse each remaining line in the file
//     toBeParsed.forEach(line => {
//       if(line == ""){
//         // If there's a totally blank line, new verse/chorus
//         closeVerse()
//       } else {
//         var currentLine = []
//         function addPhrase(phrase){
//           currentLine.push({"chord":phrase[0], "en":phrase[1]})
//         }

//         var phrases = (line.split(/\r?\[/))
//         phrases.forEach(phrase => {
//           let currentPhrase = phrase.split(/\r?]/) // try splitting
//           if(currentPhrase.length === 2){ // has chord                
//             addPhrase(currentPhrase)
//           } else if (currentPhrase.length === 1 && currentPhrase != ""){ // Just lyric
//             addPhrase(['', currentPhrase[0]])
//           }
//         });
//         // once all phrases have been split up, add the line
//         addToVerse(currentLine)        
//       }
//     });
//     if (currentVerse.length>0){
//       closeVerse()
//     }

//     // print the file
//     console.log(song)

//     output = (`export default ${JSON.stringify(song)} ;`)

//     // Output the file...
//     fs.writeFile((`./json/${filename}.js`), output, function(err) {
//       if (err) {
//           console.log(err);
//       }
//     });

//   } catch (e) {
//     console.error(e.message);
//   }
// }
// onSong2JSON(testData1, testData2, testData3)