// Remove / number markers from text

// Extracts marker character from string
//String.fromCharCode(173)
export default class ParseText {
    constructor() {
    }

    async remove (lyricString) {
        // length with number: 13
        // length without number: 10
        // indexes, 0, 5(6-1), 8(10-2)
        let finalString = lyricString.replaceAll(String.fromCharCode(173),'')
        var totalLength = finalString.length
        var numberPositions = []

        while(lyricString && lyricString.includes("%")){
            let currNum = lyricString.indexOf(String.fromCharCode(173))   
            let n = ( ( currNum*100 )/totalLength )  
            numberPositions.push(n)
            lyricString = this.spliceSlice(lyricString,currNum,1)
            //lyricString.splice(currNum,1)
        }

        // string, array: [0, .03, 0.6, .9]
        return {'lyric': finalString,'numberPositions': numberPositions}
    }
    async add (lyricString, numberPositions) {
        // length with number: 13
        // length without number: 10
        // indexes, 0, 5(6-1), 8(10-2)
        var totalLength = lyricString.length
        debugger
        while( numberPositions.length ){
            let currNum = numberPositions.pop()
            let i = parseInt( ( currNum* totalLength)/ 100)
            lyricString = this.spliceSlice(lyricString,i,0,String.fromCharCode(173))
        }
        return lyricString
    }

    spliceSlice(str, index, count, add) {
        // We cannot pass negative indexes directly to the 2nd slicing operation.
        if (index < 0) {
        index = str.length + index;
            if (index < 0) {
                index = 0;
            }
        }
        return str.slice(0, index) + (add || "") + str.slice(index + count);
    }

}