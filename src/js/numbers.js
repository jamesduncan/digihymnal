export function numbers (inputString) { // 3z3z6z6z3z3z1z3za5z5z3z5z2z1z6ca6v6v2z3z2z3xr2x1z7vta6c---s
    var displayString = ''
    if ( parseInt(inputString[0]) === NaN ) {
        console.error('This is a bad number')
    } else if ( inputString[0] == 'γ' ) {
        displayString = 'γ'
        if ( inputString.includes('0000') ){ // 0000 = a whole rest
            displayString += 'ω'
        } else if ( inputString.includes('00') ){ // 00 = a half rest
            displayString += 'ɳ'
        } 
    } else {
        displayString = inputString[0]
    } 

    // octave changes
    if ( inputString.includes('q') ){ // q = U+02D9 Dot Above 
        displayString += '˙'
    } else if (inputString.includes('c')){ // c = U+0323 dot below // 9676
        displayString += '◌̣'
    }

    //  
    if( inputString.includes('d') ){// d = sharp, # 
        displayString += '#'
    } else if ( inputString.includes('f') ){// f = flat, “♭” U+266D
        displayString += '♭'
    } else if ( inputString.includes('g') ){ // g = natural, '♮' (U+266E)
        displayString += '♮' 
    }


    if ( inputString.includes('x') ){ // x = 16th: ξ
        displayString += 'ξ'
    } else if ( inputString.includes('z') ){ // z = eighth: ɛ
        displayString += 'ɛ'
    } else if ( inputString.includes('---') ){// whole: ω
        displayString += 'ω'
    }else if ( inputString.includes('--') ){// ?𝒦
        displayString += '𝒦'
    } else if ( inputString.includes('-') ){// half: ɳ
        displayString += 'ɳ'
    } else { // default is quarter // quarter: θ
        displayString += 'θ'
    }
    
    
    
    
    

   
    // - = extend duration 1 quarter

    // Notes, pitch, accidentals, rests
    // Type a number (1-7) followed by the appropriate letter, to change the note’s pitch and length. Examples:
    // number		2	=	 quarter note           * θ
    // 16th: ξ
    // eighth: ɛ
    // quarter: θ
    // half: ɳ
    // whole: ω
    //
    // x = 16th: ξ
    // z = eighth: ɛ
    // quarter: θ
    // half: ɳ
    // whole: ω
    //
    // Quarter(?) rest: γ
    // ? 𝒦 
    //
    // q = U+02D9 Dot Above 
    // c = U+0323 dot below 

    // d = sharp, # 
    // f = flat, “♭” U+266D
    // g = natural, '♮' (U+266E) 
    // - = extend duration 1 quarter

    // number+q		2q	=	1 octave higher  quarter note * U+02D9 Dot Above 
    // number+c		2c	=	1 octave lower  quarter note * U+0323 dot below 
    // number+v		2v	=	1 octave lower  eighth note = low octave + quaver
    // number+b		2b	=	1 octave lower  sixteenth 1/16 note = low octave + semiquaver
    // number 0		0	=	 quarter rest   (0000 = a whole rest, 00 = a half rest) 
    // Slurs
    // Type number(s) 1-7 followed by the letter.  Examples:
    // number+r		2r	=	starting slur
    // number+t		2t	=	ending slur
    // numbers+y		123y	=	1 slur over several numbers (up to about 3)
    // number+u		2u	=	connecting slur
    // 1r2u3u4u5u[space]t		1r2u3u4u5u t	
    // Bar lines, repeats
    // a		a	=	bar line (to mark measures)˙ad˙ A◌̇◌̇◌̇S    ·  AS·D  A¨S
    // s		s	=	double bar lines (end of song) 
    // :s		:s	=	repeat
    // h		h	=	used with D.S.(Dal Segno), as in D.S.hal Fine (repeat from h and play to the Fine) 

    //     U+02D9 Dot Above 
    // “◌߳” U+07F3 double dot
    // “◌̣” U+0323 dot below 
    //     U0324 double dot below

    return displayString;
}
    // static getInstance(name) {

    //     if (!isConfig) {
    //         localForage.config({
    //             driver: localForage.WEBSQL, // Force WebSQL; same as using setDriver()
    //             name: 'digiHymnal',
    //             version: 1.0,
    //             size: 4980736, // Size of database, in bytes. WebSQL-only for now.
    //             storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
    //         });
    //     }

    //     if (DB_Instances[name] == null)
    //         DB_Instances[name] = localForage.createInstance({ name });

    //     return DB_Instances[name];
    // }
