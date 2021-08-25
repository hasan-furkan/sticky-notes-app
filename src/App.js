import { useState, useReducer } from 'react';
import './App.scss';

  const initialNotesState = {
      lastNoteCreated: null,
      totalNotes: 0,
      notes: [],
  }


const notesReducer = (prevState, action) =>{
  switch(action.type){
    case "ADD_NOTE":{
      const newState = {
          lastNoteCreated: new Date().toTimeString().slice(0,8),
          totalNotes: prevState.notes.length +1,
          notes:[...prevState.notes, action.payload]
      };

      console.log("After add note" , newState);
      return newState
    }
  }
};

function App() {
  const [noteInput, setNoteInput] = useState("")
  const [noteState, dispatch] = useReducer(notesReducer, initialNotesState)
  const addNote = event =>{
      event.preventDefault();

      if(!noteInput){
        return;
      }

      const newNote = {
        text: noteInput,

      };

      dispatch( {type: "ADD_NOTE", payload:newNote} )
  }

  return (
    <div className="App">
     <h1>
     Sticky Note
      
     </h1>

     <form onSubmit={addNote} className="note-form">

        <textarea value={noteInput}
        onChange={event => setNoteInput(event.target.value)}
        placeholder="Create a new note..."></textarea>
        <button>Add</button>
     </form>

     { noteInput }
    </div>
  );
}

export default App;
