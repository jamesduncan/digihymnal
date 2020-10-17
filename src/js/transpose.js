//Proof of concept chord transpose. Move somewhere else.
const chords = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

function transpose (chord, steps) {
  let index = chords.indexOf(chord) + steps;
  index = index < 0 ? index + 12 :
          index > 12 ? index - 12 : index;
  return chords[index];
}
