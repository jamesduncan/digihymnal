//Currently only support # not . Can extend in future.
const chords = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const flatChords = ["C","D♭","D","E♭","F♭","F","G♭","G","A♭","A","B♭","C♭"];

function transposeChord (chord, steps) {
  //Check if chord is flat (\u266D - unicode ♭)
  if (/[A-F]\u266D/.test(chord)) {
  	chord = convertFlat(chord)
  }
  let index = chords.indexOf(chord) + steps;
  index = index < 0 ? index + 12 :
          index >= 12 ? index - 12 : index;
  return chords[index];
}

//Extracts and replaces a transposed chord from a string ex. Dm7/F# -> D#m7/G
export function transpose (chordString, steps) {
  return chordString.replace(/[A-F][#,\u266D]?/g, (chord) => {
  	return transposeChord(chord, steps);
   });
}

function convertFlat(chord) {
  let i = flatChords.indexOf(chord);
  return chords[i];
}
