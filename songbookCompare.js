//const dirTree = require("directory-tree");
var fs = require('fs');
// opens file, returns array.
function openFile(path){
	//var fs = require('fs');
	return fs.readFileSync(path, 'ucs2')
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
		return input;
 	}
  	longString = cleanString(longString)
  	return longString.split(/\r?\n/)
}

// get real data from text files
var converted1 = stringToArray(openFile("./samples/songbooks/AT.txt"))
var converted2 = stringToArray(openFile("./samples/songbooks/KT.txt"))
var converted3 = stringToArray(openFile("./samples/songbooks/CT.txt"))

// mark each array with location of verses and new songs?

// iterate through each array
var mainApp = function (converted1, converted2, converted3){

	fs.writeFileSync(`./json/combined.json`, 'output', function(err) {
		if (err) {
			 console.log(err);
		}
	 });
	//single iterate through all files
	for (var index = 0; index < converted1.length; index++) {
		var line1 = converted1[index];
		var line2 = converted2[index];
		var line3 = converted3[index];

		// get rid of "undefined" at start of string
		// caused by the deletion of a line in source data.
		// easier to delete here than to fix regx
		var annoyingString = ['undefined']
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
		var myTokens = ["1","2","3","4","5",'6','7','8','9']
		if (myTokens.includes(line1[0])){
			continue
		}
		
		let metadataTokens = ["(","S","A","1","2","3","4","5","6","7","8","9","༡","༢","༣","༤","༥","༦","༧","༨","༨","༩","༡","༡"]
		if(metadataTokens.includes(line1[0]) || metadataTokens.includes(line1[1])){ // if we got some meta data 
			let line1Title = line1.slice(1, 2)
			let line1Default = line1.slice(0, 1)
			if(line1Default != line2.slice(0, 1) && line1Default != line3.slice(0, 1)){
				if(line1Title == line2.slice(0, 1) && line1Title == line3.slice(0, 1)){
					continue
				}
				fs.appendFileSync((`./json/combined.json`), JSON.stringify({index,
																						AT:line1,
																						KT:line2,
																						CT:line3}), 
					function(err) {
						if (err) {
							console.log(err);
						}
				});
			}
			//break; // exit the loop, data has been captured
		}		 

		continue
		
	}
}

// call the main function
console.log(mainApp(converted1, converted2, converted3))


