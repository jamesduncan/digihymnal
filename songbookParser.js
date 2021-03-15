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
async function openFile(path){
	//var fs = require('fs');
	return Promise.resolve(
		fs.readFile(path, 'ucs2', function(err, data) {
				if (err) throw err;
				return(stringToArray(data));
		})
	)
}

function resetFile(filename){
	try{
	  output = (``)
 
	  // Output the file...
	  fs.writeFile((`./${filename}.json`), output, function(err) {
		 if (err) {
			  console.err(err);
		 }
	  });
 
	} catch (e) {
	  console.error(e.message);
	}
 }
function writeToFile(data, filename){
	console.log({'attempting to save': typeof filename})
  try{
    output = (JSON.stringify(data))

    // Output the file...
    fs.appendFile((`./json/${filename}.json`), output, function(err) {
      if (err) {
          console.err(err);
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
async function stringToArray(longString){
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
    console.log(longString)
    return longString.split(/\r?\n/)
}

// turn a full chunk of test data into array
//let converted1 = stringToArray(testData1)
//let converted2 = stringToArray(testData2)
//let converted3 = stringToArray(testData3)
// get real data from text files
let converted1 = openFile("./samples/songbooks/AT.txt")
let converted2 = openFile("./samples/songbooks/KT.txt")
let converted3 = openFile("./samples/songbooks/CT.txt")

// mark each array with location of verses and new songs?
writeToFile({converted1}, "at")
writeToFile({converted2}, "kt")
writeToFile({converted3}, "ct")
debugger;
// iterate through each array
var mainApp = async function (converted1, converted2, converted3){
	console.log({"first variable is": typeof converted1})
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
		writeToFile(output, filename)
		try{
	     fs.writeFile((`./json/${filename}.json`), output, function(err) {
			if (err) {
				console.log(err);
			}
		});
		} catch (e) {
			console.error(e.message);
		}	

		//clear stuff out
		song.author = ("*")
		song.key = ("*")
		song.lyrics = {}
		song.metadata = []
		song.lyrics.Verse = []
		currentVerseId = 1
		currentVerseLabel =''
		currentVerse = {}
		currentVerse.line = []
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
				// debugger thing here
				writeToFile({index,line1, line2, line3}, "titlesTest")
				// write old song to disk
				closeSong(song,currentTitle)
				titleJustCaptured = true
				// start saving new data
				currentTitle = line.slice(0,l.songNumberIndex); // this is the song 'number'
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

}
console.log(mainApp(converted1, converted2, converted3))


