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

let minorChords =[
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
      chordKey = ["C1", "D#1", "G1"]
    },

    {
      chordName = "f Minor",
      chordKey = ["F1", "G#1", "C2"]
    },

    {
      chordName = "G Minor",
      chordKey = ["G1", "A#1", "D2"]
    },

    {
      chordName = "C# Minor",
      chordKey = ["C1", "E1", "G#1"]
    },

    {
      chordName = "F# Minor",
      chordKey = ["F#1", "A1", "C#2"]
    },

    {
      chordName = "Ab Minor",
      chordKey = ["G#1", "B1", "D#2"]
    },

    {
      chordName = "Eb Minor",
      chordKey = ["D#1", "F#1", "A#1"]
    },

    {
      chordName = "Bb Minor",
      chordKey = ["A#1", "C#2", "F2"]
    },

    {
      chordName = "B Minor",
      chordKey = ["B1", "D2", "F#2"]
    }
]
  
let majorChords = [
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
    chordKey = ["D1", "F#1", "A1"]
  },

  {
    chordName = "Bb Major",
    chordKey = ["A#1", "D2", "F2"]
  },

  {
    chordName = "A Major",
    chordKey = ["A1", "C#2", "E2"]
  },

  {
    chordName = "Eb Major",
    chordKey = ["D#1", "G1", "A#1"]
  },


  {
    chordName = "E Major",
    chordKey = ["E1", "G#1", "B1"]
  },


  {
    chordName = "Ab Major",
    chordKey = ["G#1", "C1", "D#2"]
  },


  {
    chordName = "B Major",
    chordKey = ["B1", "D#2", "F#2"]
  },


  {
    chordName = "F# Major",
    chordKey = ["F#1", "A#1", "C#2"]
  },

{   
     chordName="C# Major",
     chordKey=["C#1", "F1", "G#1"]
}
]

let harmonicMinorScales = [
  {
    chordName = "a Minor",
    chordKey = ["A1", "B1", "C2","D2","E2","F2","G#2","A2"]
  },

  {
    chordName = "e Minor",
    chordKey = ["E1", "F#1", "G1","A1","B1","C2","D#2","E2"]
  },


  {
    chordName = "b Minor",
    chordKey = ["B1", "C#1", "D2","E2","F#2","G2","A#2","B2"]
  },


  {
    chordName = "f# Minor",
    chordKey = ["F#1", "G#1", "A1","B1","C#2","D2","G2","G#2"]
  },


  {
    chordName = "c# Minor",
    chordKey = ["C#2", "D#2", "E1","F#3","G#3","A2","C2","C#3"]
  },


  {
    chorName = "g# Minor",
    chordKey = ["F#1", "G#1", "A1","B1","C#2","D2","F2","F#2"]
  },


  {
    chordName = "eb Minor",
    chordKey = ["D#1", "F1", "F#1","G#1","A#1","B1","D2","D#2"]
  },


  {
    chordName = "Bb Minor",
    chordKey = ["A#1", "C2", "C#2","D#2","F2","F#2","A2","A#2"]
  },


  {
    chordName = "f Minor",
    chordKey = ["F1", "G1", "G#1","A#1","C2","C#2","E2","F2"]
  },


  {
    chordName = "c Minor",
    chordKey = ["C2", "D2", "D#2","F2","G2","G#2","B2","C3"]
  },


  {
    chordName = "g Minor",
    chordKey = ["G1", "A1", "A#1","C2","D2","D#2","F#2","G2"]
  },

{
  
    chordName = "d Minor",
    chordKey = ["D2","E2", "F2", "A2","A#2","C#2","D3"]
  }
]
  
  let majorScales =[
    {
      scaleName = "C Major",
      scaleKey = ["C2","D2","E2","F2","G2","A2","B2","C2"]
    },
    
    {
      scaleName = "G Major",
      scaleKey = ["G1","A1","B1","C2","D2","E2","F#2","G2"]
    },
    
    {
      scaleName = "F Major",
      scaleKey = ["F1","G1","A1","A#1","C2","D2","E2","F2"]
    },
    
    {
      scaleName = "D Major",
      scaleKey = ["D1","E1","F#2","G2","A2","B2","C#2","D2"]
    },
  
  
    {
      scaleName = "Bb Major",
      scaleKey = ["A#1","C2","D2","D#2","F2","G2","A2","A#2"]
    },
    
    {
      scaleName = "A Major",
      scaleKey = ["A1","B1","C#2","D2","E2","F#2","G#2","A2"]
    },
    
    {
      scaleName = "Eb Major",
      scaleKey = ["D#1","F1","G1","G#1","A#1","C2","D2","C2D#2"]
    },
    
    {
      scaleName = "E Major",
      scaleKey = ["E2","F#1","F#1","A1","B1","C#2","D#2","E2"]
    },
    
    {
      scaleName = "Ab Major",
      scaleKey = ["G#1","A#1","C2","C#2","D#2","F2","G2","G#2"]
    },
    
    {
      scaleName = "B Major",
      scaleKey = ["B1","C#2","D#2","E2","F#2","G#2","A#2","B2"]
    },
    
    {
      scaleName = "F# Major",
      scaleKey = ["F#1","G#1","A#1","B1","C#2","D#2","F2","C2F#2"]
    },
    
    {
      scaleName = "C# Major",
      scaleKey = ["C#2","D#2","F2","F#2","G#2","A#2","F3","F#3"]
    }
    ]
    
    let fourChords = [
      {
        chordName = "C Major",
        chordKey = ["C1", "C2","E2","G2"]
      },
      
      {
        cordsName = "G Mjor",
        cordKey = ["B1", "C2", "D2", "G2"]
      },
        
      {
        cordName = "A Major",
        cordKey = ["A1", "C2", "E2", "G2"]
      },
          
      {
         cordName = "F Major"
         cordKey = ["F1", "C2","F2", "G2"]
       }
            
      ]
    
  
  