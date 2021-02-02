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

function openFile(path){
  var fs = require('fs');
  fs.readFile(path, 'ucs2', function(err, data) {
      if (err) throw err;
      var filename = path.split("/").pop()
      filename = path.split("\\").pop()
      filename = filename.split(".").shift()
      console.log(filename)
      onSong2JSON(data, filename);
  });
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
  try{
    output = (`${JSON.stringify(data)}\n`)

    // Output the file...
    fs.appendFile((`./${filename}.json`), output, function(err) {
      if (err) {
          console.log(err);
      }
    });

  } catch (e) {
    console.error(e.message);
  }
}
// FEED ME YOUR    T E S T    D A T A
//parseDir("D:/schubert.dev/parser/samples")

// TODO I'm only checking the first character here right? don't have double chars
const MARKERCHARACTERS = ["S","A","1","2","3","4","5","6","7","8","9","༡","༢","༣","༤","༥","༦","༧","༨","༨","༩","༡","༡"]
//var newVerseCue = ["1","2","3","4","5","6","7","8","9",10,11,12,13,14,15,16,17,18,19,20,21,"༡","༢","༣","༤","༥","༦","༧","༨","༨ ཁ","༩ ཀ","༡༠ ཁ"]
// CT
var testData1 = (`1.	དཀོན་མཆོག
(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) 
	1ཀྱེ། དཀོན་མཆོག
	ནམ་མཁའ་དང་ས་གཞི།
	ཁྱེད་ཀྱི་དབང་གིས་བཀོད་པ་རེད།
	ཀྱེ། དཀོན་མཆོག ནམ་མཁའ་དང་ས་གཞི།
	ཁྱེད་ཀྱི་ཕྱག་གིས་བཀོད་པ་རེད།
2ཁྱེད་ལ་ཁག་པོ་གང་ཡང་མེད། 
ཁྱེད་ལ་ཁག་པོ་གང་ཡང་མེད།		
ང་ཚོའི་ཀུན་དབང་གི་དཀོན་མཆོག
བཀའ་དང་མཛད་པ་རྣམས་ཆེན་པོ་ཡིན། 
གང་ཡང་། གང་ཡང་། རྩ་བ་ནས་གང་ཡང་།
ཁྱེད་ལ་ཁག་པོ་གང་ཡང་མེད།།
2.	ཀྱེ། མི་རིགས་ཀུན། 
(གསུང་མགུར་117 པ། སྒྲ་སྙན་རྡུང་ལེན་གྱི་གདངས།)
༡	ཀྱེ། མི་རིགས་ཀུན་ཡ་ཝེར་བསྟོད་སྔོགས་ཤིག		
	ཀྱེ། མི་སྡེ་རྣམས་ཁོང་ལ་བསྟོད་སྔོགས་ཤིག
༢	ངེད་ལ་ཁོང་གི་ཐུགས་རྗེ་ཆེ་ལགས་ཤིང་།
	ཡ་ཝེའི་བདེན་ཉིད་རྒྱུན་དུ་གནས་པས་སོ།
༣	ཡ་ཧོ་ཝཱ་ལ་བསྟོད་པར་གྱིས་ཤིག་ཨང་།། ༢		
3.	དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ།
(God is so good ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།)
༡	དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ། ༣
	བཀའ་དྲིན་ཆེན་པོ་རེད།
༢	ང་ཡི་སྡིག་པ་བསལ་སོང་། ༣	
	བཀའ་དྲིན་ཆེན་པོ་རེད།
༣	ང་ལ་རང་དབང་ཐོབ་བྱུང་། ༣
	བཀའ་དྲིན་ཆེན་པོ་རེད།
༤	དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ།
	ང་ཡི་སྡིག་པ་བསལ་སོང་།		
	ང་ལ་རང་དབང་ཐོབ་བྱུང་།
	བཀའ་དྲིན་ཆེན་པོ་རེད།།
`)
  
// KT
var testData2 = (`1. ཀྱེ། དཀོན་མཆོག 

(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།)  
ཀྱེ། དཀོན་མཆོག 
ནམ་མཁའ་དང་ས་གཞི། 
ཁྱེད་ཀྱི་དབང་གིས་བཀོད་པ་རེད། 
ཀྱེ། དཀོན་མཆོག ནམ་མཁའ་དང་ས་གཞི། 
ཁྱེད་ཀྱི་ཕྱག་གིས་བཀོད་པ་རེད། 
ཁྱེད་ལ་དཀའ་ལས་གང་ཡང་མེད། 
ཁྱེད་ལ་དཀའ་ལས་གང་ཡང་མེད། 
ང་ཚོའི་ཀུན་དབང་གི་དཀོན་མཆོག 
བཀའ་དང་མཛད་པ་རྣམས་ཆེན་པོ་ཡིན། 
གང་ཡང་། གང་ཡང་། རྩ་བ་ནས་གང་ཡང་། 
ཁྱེད་ལ་ དཀའ་ལས་གང་ཡང་མེད། 


2. ཀྱེ། མི་རིགས་ཀུན། 

(གསུང་མགུར117 པ། སྒྲ་སྙན་རྡུང་ལེན་གྱི་གདངས།) 
༡ ཀྱེ། མི་རིགས་ཀུན་ཡ་ཝཱེར་བསྟོད་སྔོགས་ཤིག 
ཀྱེ། མི་སྡེ་རྣམས་ཁོང་ལ་བསྟོད་སྔོགས་ཤིག 
༢ ངེད་ལ་ཁོང་གི་ཐུགས་རྗེ་ཆེ་ལགས་ཤིང་། 
ཡ་ཝཱེའི་བདེན་ཉིད་རྒྱུན་དུ་གནས་པས་སོ། 
༣ ཡ་ཧོ་ཝ་ལ་བསྟོད་པར་གྱིས་ཤིག་ཨང་། ༢ 
3. དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ། 

(God is so good ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) 
༡ དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ། ༣ 
བཀའ་དྲིན་ཆེན་པོ་རེད། 
༢ ང་ཡི་སྡིག་པ་བསལ་སོང་། ༣ 
བཀའ་དྲིན་ཆེན་པོ་རེད། 
༣ ང་ལ་རང་དབང་ཐོབ་བྱུང་། ༣ 
བཀའ་དྲིན་ཆེན་པོ་རེད། 
༤ དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ། 
ང་ཡི་སྡིག་པ་བསལ་སོང་། 
ང་ལ་རང་དབང་ཐོབ་བྱུང་། 
བཀའ་དྲིན་ཆེན་པོ་རེད། `)

// AT
var testData3 = (`1.	ཀྱེ། དཀོན་མཆོག
(Ah, Lord God ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།) 
	1ཀྱེ། དཀོན་མཆོག
	ནམ་མཁའ་དང་ས་གཞི།
	ཁྱེད་ཀྱི་དབང་གིས་བཀོད་པ་རེད།
	ཀྱེ། དཀོན་མཆོག ནམ་མཁའ་དང་ས་གཞི།
	ཁྱེད་ཀྱི་ཕྱག་གིས་བཀོད་པ་རེད།
2ཁྱེད་ལ་ཁག་པོ་གང་ཡང་མེད། 
ཁྱེད་ལ་ཁག་པོ་གང་ཡང་མེད།	
ང་ཚོའི་ཀུན་དབང་གི་དཀོན་མཆོག
བཀའ་དང་མཛད་པ་རྣམས་ཆེན་པོ་ཡིན། 
གང་ཡང་། གང་ཡང་། རྩ་བ་ནས་གང་ཡང་།
ཁྱེད་ལ་ཁག་པོ་གང་ཡང་མེད།
2.	ཀྱེ། མི་རིགས་ཀུན། 
(གསུང་མགུར117 པ། སྒྲ་སྙན་རྡུང་ལེན་གྱི་གདངས།)
༡	ཀྱེ། མི་རིགས་ཀུན་ཡ་ཝཱེར་བསྟོད་སྔོགས་ཤིག	
	ཀྱེ། མི་སྡེ་རྣམས་ཁོང་ལ་བསྟོད་སྔོགས་ཤིག
༢	ངེད་ལ་ཁོང་གི་ཐུགས་རྗེ་ཆེ་ལགས་ཤིང་།
	ཡ་ཝཱེའི་བདེན་ཉིད་རྒྱུན་དུ་གནས་པས་སོ།།
༣	ཡ་ཧོ་ཝཱ་ལ་བསྟོད་པར་གྱིས་ཤིག་ཨང་། ༢	
3.	དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ།
(God is so good ཞེས་པའི་དབྱིན་ཇིའི་བསྟོད་དབྱངས།)
༡	དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ། ༣
	བཀའ་དྲིན་ཆེན་པོ་རེད།
༢	ང་ཡི་སྡིག་པ་བསལ་སོང་། ༣	
	བཀའ་དྲིན་ཆེན་པོ་རེད།
༣	ང་ལ་རང་དབང་ཐོབ་བྱུང་། ༣
	བཀའ་དྲིན་ཆེན་པོ་རེད།
༤	དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ།
	ང་ཡི་སྡིག་པ་བསལ་སོང་།	
	ང་ལ་རང་དབང་ཐོབ་བྱུང་།
	བཀའ་དྲིན་ཆེན་པོ་རེད།`)

var allSongs = []
var currentSong = []
async function checkLine(line, line2, line3, allSongs, currentSong, index){
  // If it a new-song line
  // If it a new verse
  // else just line


  var newSong = ["S","A","1","2","3","4","5","6","7","8","9"]
  if(newSong.includes(line[0])){ // could be new song
    if(checkIsTitle(line,1)){ // is new song
			return ({isTitle:true, })
	 }
	 // TODO not exiting function
	 return
  }
  
  console.log({line, line2, line3})
  writeToFile({index,line, line2, line3}, "titlesTest")
  currentSong.push({line, line2, line3})
  
}
// find out if the verse indicator takes up more than one character
async function getVerseIndex(line,i){
	var newVerseCue = ["1","2","3","4","5","6","7","8","9","༡","༢","༣","༤","༥","༦","༧","༨","༨"," ","ཁ","༩","ཀ","༡","༠","ཁ"]
	if(newVerseCue.includes(line[i])){ // new verse
		checkIsVerse(line,++i)
	}else{
		return i
	}
}
async function checkIsTitle(line,i){
  // console.log({"checking line":line, "at":i})
  if(i>6){
	  console.log("Returning false")
	  return {isTitle:false}}
  if(line[i] === '.'){
	console.log("Returning true")
	 return {isTitle:true,songNumberIndex:i}
  }
  if (MARKERCHARACTERS.includes(line[i])){
	return checkIsTitle(line,++i)
  }
}

// convert very long string into array
// array of each new line
function stringToArray(longString){
    // Clean any un-needed characters
    function cleanString(input) {
      //  TODO strip out all '/t'
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

// turn a full chunk of test data into array
let converted1 = stringToArray(testData1)
let converted2 = stringToArray(testData2)
let converted3 = stringToArray(testData3)

// mark each array with location of verses and new songs?
// writeToFile({converted1}, "titlesTest")
// writeToFile({converted2}, "titlesTest")
// writeToFile({converted3}, "titlesTest")

// iterate through each array
var mainApp = async function (converted1, converted2, converted3){
	var currentTitle = 'emptyRecord' 
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
      currentVerse.line.push({phrase:currentLine})
	}
	closeVerse = () => {
		song.lyrics.Verse.push(currentVerse)
		currentVerseId++
		currentVerse = {}
		currentVerse.lines = []
		currentVerse.label = ("verse " + currentVerseLabel.toString())
		currentVerse.id = (currentVerseId)
	}

	// Output the file...
	async function closeSong(output, filename){
		try{
	     fs.writeFile((`./json/${filename}.json`), output, function(err) {
			if (err) {
				console.log(err);
			}
		});
		} catch (e) {
			console.error(e.message);
		}	
	}
	// we assume each line from each array is equivalent
	var titleJustCaptured = false
	for (let index = 0; index < converted1.length; index++) {
		const line1 = converted1[index];
		const line2 = converted2[index];
		const line3 = converted3[index];
		
		// for one line after capturing title,
		// if line starts with "(" is meta data
		// if next line starts with a numeral or (
		if (titleJustCaptured){
		  let metadataTokens = ["(","1","2","3"]
		  if(metadataTokens.includes(line1[0])){ // if we got some meta data 
			song.metadata.push({ // save the data
					CT:line1,
					KT:line2,
					AT:line3
				})
			break; // exit the loop, data has been captured
		  }else{
			  titleJustCaptured = false
		  }
		}

		// If there is a fancy marker
		if(MARKERCHARACTERS.includes(line1[0])){
			let l = checkIsTitle(line1) // check if it is a title	
			console.log(l)
			if(l.isTitle){
				// write old song to disk
				closeSong(song,currentTitle)
				titleJustCaptured = true
				// start saving new data
				currentVerseLabel = line.slice(0,l.songNumberIndex); // this is the song 'number'
				song.title = {CT:line1.slice(l.songNumberIndex, line1.length), // this is the song name in different languages
								  KT:line2.slice(l.songNumberIndex, line2.length),
								  AT:line3.slice(l.songNumberIndex, line3.length)}
			} else{// If it isn't a new song, it must be a new verse
				let index = await getVerseIndex(line1,1)
				closeVerse()// make new verse object
				// start saving new data
				currentVerseLabel = line1.slice(0,index); // this is the song 'number'
				// this is the phrase - after the new-verse marker
				addToVerse( {CT:line1.slice(index, line1.length),
									KT:line2.slice(index, line2.length),
									AT:line3.slice(index, line3.length)}
								)
			}
		}else{ // if it has no special characters, it must be a normal line
			addToVerse({
				CT:line1,
				KT:line2,
				AT:line3
			})
		}
	}
	writeToFile({currentVerse}, "titlesTest")
	return currentVerse
}
console.log(mainApp(converted1, converted2, converted3))

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