// Create a data.js file
// Add all Major Chords to an Array as Objects separated by commas
// Add all Minor Chords to an Array as Objects separated by commas
// Each Chord will be an object with a chordName Property and a chordKey Property
// The Value of the codeName will be a String with the chord name
// The Value of the chordKey will be an Array containing the keys in the chord
//
// Add all Major Scales to an Array as above
// Add all Harmonic Minor Scales to an Array as above
//
// Add all Four Chords to an Array as above



let majorCords = [
  "C Major",
  "F Major",
  "G Major",
  "D Major",
  "E Major",
  "A Major",
  "C# Major",
  "Eb Major",
  "Ab Major",
  "F# Major",
  "B Major",
  "Bb MAjor"
]
console.log(majorCords);

let minorCords = [
  "D Minor",
  "E Minor",
  "A Minor",
  "C Minor",
  "F Minor",
  "G Minor",
  "C# Minor",
  "F# Minor",
  "Ab Minor",
  "Eb Minor",
  "Bb Minor",
  "B Minor"
]
console.log(minorCords);

let majorScale = [
  "C Major",
  "G Major",
  "F Major",
  "D Major",
  "Bb Major",
  "A Major",
  "Eb Major",
  "E Major",
  "Ab Major",
  "B Major",
  "F# Major",
  "C# MAjor"
]
console.log(majorScale);

let harmonicMinorScales = [
  "a Minor",
  "e Minor",
  "b Minor",
  "f# Minor",
  "c# Minor",
  "g# Minor",
  "eb Minor",
  "Bb Minor",
  "f Minor",
  "c Minor",
  "g Minor",
  "d Minor"
]
console.log(harmonicMinorScales);
let fourChords = [
  "C Major",
  "G Major",
  "A Major",
  "F Major"
]
console.log(fourChords);


let majorCords = [
  {
    chordName = "C Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "F Major",
    chordKey = ["F," "G", "A"]
  },
____________________________________________________________________
  {
    chordName = "G Major",
    chordKey = ["A," "B", "C"]
  },

  {
    chordName = "D Major",
    chordKey = ["A," "B", "C"]
  },

  {
    chordName = "E Major",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "A Major",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "C# Major",
    chordKey = ["C#", "E", "G#"]
  },

  {
    chordName = "Eb Major",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "Ab Major",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "F# Major",
    chordKey = ["A," "B", "C"]
  },

  {
    chordName = "B Major",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "Bb Major",
    chordKey = ["A," "B", "C"]
  },
]

let minorCords = [
    {
      chordName = "D Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "E Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "A Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "C Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "f Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "G Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "C# Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "F# Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "Ab Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "Eb Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "Bb Minor",
      chordKey = ["A," "B", "C"]
    },

    {
      chordName = "B Minor",
      chordKey = ["A," "B", "C"]
    },
]

let majorScale = [
  {
    chordName = "C Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "G Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "F Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "D Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "Bb Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "A Major",
    chordKey = ["C," "E", "G"]
  },

  {
    chordName = "Eb Major",
    chordKey = ["C," "E", "G"]
  },


  {
    chordName = "E Major",
    chordKey = ["C," "E", "G"]
  },


  {
    chordName = "Ab Major",
    chordKey = ["C," "E", "G"]
  },


  {
    chordName = "B Major",
    chordKey = ["C," "E", "G"]
  },


  {
    chordName = "F# Major",
    chordKey = ["C," "E", "G"]
  },


  {
    chordName = "C# Major",
    chordKey = ["C," "E", "G"]
  },
]

let harmonicMinorScales = [
  {
    chordName = "a Minor",
    chordKey = ["A," "B", "C"]
  },

  {
    chordName = "e Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "b Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "f# Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "c# Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chorName = "g# Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "eb Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "Bb Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "f Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "c Minor",
    chordKey = ["A," "B", "C"]
  },


  {
    chordName = "g Minor",
    chordKey = ["A," "B", "C"]
  },


  
    chordName = "d Minor",
    chordKey = ["A," "B", "C"]
  },
]
___________________________________

let minorCords=[
  {
  
     chordName = "D Minor",
      chordKey = ["D1", "F1", "A1"]
    },

    {
      chordName = "E Minor",
      chordKey = ["E1", "G1", "B1"]
    },

    {
      chordName = "A Minor",
      chordKey = ["A1", "C2", "E2"]
    },

    {
      chordName = "C Minor",
      chordKey = ["C1", "D#", "G1"]
    },

    {
      chordName = "f Minor",
      chordKey = ["F1", "G#", "C2"]
    },

    {
      chordName = "G Minor",
      chordKey = ["G1", "A#", "D2"]
    },

    {
      chordName = "C# Minor",
      chordKey = ["C1", "E1", "G#"]
    },

    {
      chordName = "F# Minor",
      chordKey = ["F#", "A1", "C#"]
    },

    {
      chordName = "Ab Minor",
      chordKey = ["G#", "B1", "D#"]
    },

    {
      chordName = "Eb Minor",
      chordKey = ["D#", "F#", "A#"]
    },

    {
      chordName = "Bb Minor",
      chordKey = ["A#", "C#", "F2"]
    },

    {
      chordName = "B Minor",
      chordKey = ["B1", "D2", "F#"]
    }
]
  
let majorScale = [
  {
    chordName = "C Major",
    chordKey = ["C1", "E1", "G1"]
  },

  {
    chordName = "G Major",
    chordKey = ["G1", "B1", "D1"]
  },

  {
    chordName = "F Major",
    chordKey = ["F1", "A1","C2"]
  },

  {
    chordName = "D Major",
    chordKey = ["D1", "F#", "A1"]
  },

  {
    chordName = "Bb Major",
    chordKey = ["A#", "D2", "F2"]
  },

  {
    chordName = "A Major",
    chordKey = ["A1", "C#", "E2"]
  },

  {
    chordName = "Eb Major",
    chordKey = ["D#", "G1", "A#"]
  },


  {
    chordName = "E Major",
    chordKey = ["E1", "G#", "B1"]
  },


  {
    chordName = "Ab Major",
    chordKey = ["G#", "C1", "D#"]
  },


  {
    chordName = "B Major",
    chordKey = ["B1", "D#", "F#"]
  },


  {
    chordName = "F# Major",
    chordKey = ["F#", "A#", "C#"]
  },

{   
     chordName="C# Major",
     chordKey=["C#", "F1", "G#"]
}
]

let harmonicMinorScales = [
  {
    chordName = "a Minor",
    chordKey = ["A1", "B1", "C2","D2","E2","F2","G#","A2"]
  },

  {
    chordName = "e Minor",
    chordKey = ["E1", "F#", "G1","A1","B1","C2","D#","E2"]
  },


  {
    chordName = "b Minor",
    chordKey = ["B1", "C#", "D2","E2","F#","G2","A#","B2"]
  },


  {
    chordName = "f# Minor",
    chordKey = ["F#", "G#", "A1","B1","C#","D2","G2","G#"]
  },


  {
    chordName = "c# Minor",
    chordKey = ["C#", "D#", "E1","F#","G#","A2","C2","C#"]
  },


  {
    chorName = "g# Minor",
    chordKey = ["F#", "G#", "A1","B1","C#","D2","F2","F#"]
  },


  {
    chordName = "eb Minor",
    chordKey = ["D#", "F1", "F#","G#","A#","B1","D2","D#"]
  },


  {
    chordName = "Bb Minor",
    chordKey = ["A#", "C2", "C#","D#","F2","F#","A2","A#"]
  },


  {
    chordName = "f Minor",
    chordKey = ["F1", "G1", "G#","A#","C2","C#","E2","F2"]
  },


  {
    chordName = "c Minor",
    chordKey = ["C2" "D2", "D#","F2","G2","G#","B2","C3"]
  },


  {
    chordName = "g Minor",
    chordKey = ["G1", "A1", "A#","C2","D2","D#","F#","G2"]
  },


  
    chordName = "d Minor",
    chordKey = ["D2","E2", "F2", "A2","A#","C#","D3"]
  },
]
  
  