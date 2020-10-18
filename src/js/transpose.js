//Currently only support # not . Can extend in future.
const chords = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

function transposeChord (chord, steps) {
  let index = chords.indexOf(chord) + steps;
  index = index < 0 ? index + 12 :
          index >= 12 ? index - 12 : index;
  return chords[index];
}

//Extracts and replaces a transposed chord from a string ex. Dm7/F# -> D#m7/G
export function transpose (chordString, steps) {
  return chordString.replace(/[A-F]#?/g, (chord) => {
  	return transposeChord(chord, steps);
   });
}
