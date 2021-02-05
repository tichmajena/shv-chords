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
    chordName = "g# Minor",
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


  {
    chordName = "d Minor",
    chordKey = ["A," "B", "C"]
  },
]
