const dirTree = require("directory-tree");
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

// FEED ME YOUR    T E S T    D A T A
parseDir("D:/schubert.dev/parser/samples")



var testData = (`Kencho Gi Gawa
Dzongkha
Key: E

[E]Kencho [G#m]Choe gi [A]sem gi phodrang [E]na
nga [A]lu [E]Choe gi za[B]na
[C#m]Choe gi [G#m]gawa gi [A]nga [E]lu
zhing[F#m]kham gi [B]lam [E]toen ye
[E]Ha..[G#m]lle..[A]lu…[E]jah
Ha..[A]lle..[E]lu…[B]jah
[C#m]Choe gi [G#m]gawa gi [A]nga [E]lu
zhing[F#m]kham gi [B]lam [E]toen ye

[E]Kencho [G#m]Choe gi [A]sem gi phodrang [E]na
nga [A]lu [E]Choe gi za[B]na
[C#m]Choe gi [G#m]gawa gi [A]nga [E]lu
zhing[F#m]kham gi [B]lam [E]toen ye
[E]Ha..[G#m]lle..[A]lu…[E]jah
Ha..[A]lle..[E]lu…[B]jah
[C#m]Choe gi [G#m]gawa gi [A]nga [E]lu
zhing[F#m]kham gi [B]lam [E]toen ye`)
// This one is guaranteed to work
// onSong2JSON(testData)


//this will parse XML file
function onSong2JSON(data, filename) {
  try {
    var song = {};
    var removeSpaces = /\s+,"-"/
    //str = str.trim().replaceAll("\\s+", " ");
    song.id = filename.replace(/\s+/g, "_")
    //song.id = (filename)

    // Clean any un-needed characters
    function cleanString(input) {
      //  TODO strip out all '/t'
      var output = "";
      var output = input.replace(/([\t])/g, '');
      //for (var i=0; i<input.length; i++) {
      //  if (input.charCodeAt(i) <= 127) {
      //    output += input.charAt(i);
      //  }
      //}
      return output;
    }
    data = cleanString(data)
  


    // select the first three lines
    // [0] is the whole dataset, first line is '1'
    var dataArray = data.split(/\r?\n/)
    //var getMetaLines = /(.*?)\n(.*?)\n(.*?)\n(.*)/
    // first line
    //song.title = (getMetaLines.exec(data)[1])
    currentTitle = dataArray[0] 
    song.title = ({"en":currentTitle})
    // second line
    //song.author = (getMetaLines.exec(data)[2])
    song.author = (dataArray[1])
    // third line skip "Key: " 
    var selectKey = /(?![Key: ])(.*)/
    //console.log(selectKey.exec("Key: G#")[0])
    //console.log(selectKey.exec("Key: C")[0])
    //song.key = (selectKey.exec(getMetaLines.exec(data)[3])[0])
    song.key = (selectKey.exec(dataArray[2])[0])

    
    song.lyrics = {}
    song.lyrics.Verses = []

    // TODO I'm assuming data starts on 5th line
    let lyricsStart = 4
    // Make array of just lyrics
    var toBeParsed = dataArray.splice(lyricsStart)
    //console.log(lyrics)

    // A temporary variable that toBeParsed calls
    var currentVerse = {}
    currentVerse.lines = []
    // TODO use label, using a number for now
    var currentVerseLabel = 1

    // add a set of phrases (line) to the verse
    function addToVerse(currentLine){
      currentVerse.lines.push({phrases:currentLine})
    }

    // close the verse, push it to the song, and clear it
    function closeVerse(){
      currentVerse.label = ("verse " + currentVerseLabel.toString())
      song.lyrics.Verses.push(currentVerse)
      currentVerseLabel++
      currentVerse = {}
    }
    
    // parse each remaining line in the file
    toBeParsed.forEach(line => {
      if(line == ""){
        // If there's a totally blank line, new verse/chorus
        closeVerse()
      } else {
        var currentLine = []
        function addPhrase(phrase){
          currentLine.push({"chord":phrase[0], "en":phrase[1]})
        }

        var phrases = (line.split(/\r?\[/))
        phrases.forEach(phrase => {
          let currentPhrase = phrase.split(/\r?]/) // try splitting
          if(currentPhrase.length === 2){ // has chord                
            addPhrase(currentPhrase)
          } else if (currentPhrase.length === 1 && currentPhrase != ""){ // Just lyric
            addPhrase(['', currentPhrase[0]])
          }
        });
        // once all phrases have been split up, add the line
        addToVerse(currentLine)        
      }
    });
    if (currentVerse.length>0){
      closeVerse()
    }

    // print the file
    console.log(song)

    output = (`export default ${JSON.stringify(song)} ;`)

    // Output the file...
    fs.writeFile((`./json/${filename}.js`), output, function(err) {
      if (err) {
          console.log(err);
      }
  });

  } catch (e) {
    console.error(e.message);
  }
}
