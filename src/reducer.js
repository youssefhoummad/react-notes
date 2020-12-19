
export let initialState = {};
// localStorage.clear()


if (localStorage.length){

  initialState = JSON.parse(localStorage.getItem('initialState'))
  
} else {

  const folders = [{ id:"1608232926248vpmbk", name:"الأفكار"}]
    const notes = [{
          id:"1608232hjs926248vpmbk", 
          title:"ملاحظة واحد", 
          content:"الحمد لله رب العالمين الرحمن الرحيم",
        }]
    const  currentFolder= folders[0];
    const  currentNote = notes[0];
    const  menuCollapsed='' 
    const  tempNote= ''

    folders[0].notes = notes;

    initialState = {folders, currentFolder, currentNote, tempNote, menuCollapsed}
    
    localStorage.setItem('initialState', JSON.stringify(initialState))
}


const generateId = () => {
  return (new Date()).getTime() + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}


const saveNote = (state) => {

        if (!state.tempNote) return state;

        state.currentNote.content = state.tempNote;

        state.tempNote = "";

        localStorage.setItem('initialState', JSON.stringify(state))

        console.log(state.folders);
      
        return state
}


const reducer = (state, action) => {
  
    switch (action.type) {

      case "DELETE_NOTE":
      {

        const newState = {...state};
        
        const notes = newState.currentFolder.notes.filter(n=> n.id !== state.currentNote.id)


        if (!notes.length) {

          //  console.log("imposoble to remove fitst note");

           if (newState.folders.length > 1){

              const folders = newState.folders.filter(f=> f.id !== state.currentFolder.id)

              newState.folders = folders;

              newState.currentFolder = newState.folders[0];

              newState.currentNote = newState.currentFolder.notes[0];

              localStorage.setItem('initialState', JSON.stringify(newState))

              return newState

           }

           return newState
        }

        newState.currentFolder.notes = notes;

        newState.currentNote = newState.currentFolder.notes[0]

        localStorage.setItem('initialState', JSON.stringify(newState))

        return newState
      }

      case "TEMP_NOTE":

        return {...state, tempNote:action.payload}
      
      case "SAVE_NOTE": 

        return saveNote({...state})

      case "RENAME_NOTE":       
      {          
          const newState = {...state};

          newState.currentNote.title = action.payload

          localStorage.setItem('initialState', JSON.stringify(newState))
    
          return newState;

        }
      
      case "RENAME_FOLDER":  

        const newState = {...state}

        newState.currentFolder.name = action.payload

        localStorage.setItem('initialState', JSON.stringify(newState))
        
        return newState;
      
      case "ADD_FOLDER": 
        { 

          const newState = {...state}

          const currentFolder = {
            id: generateId(),
            name: "مجلد جديد",
            notes: [{
              id: generateId(),
              title: "ملاحظة جديدة", 
              content:"..."
            }]
          };

        
          newState.folders.push(currentFolder)

          newState.currentNote = currentFolder.notes[0]

          localStorage.setItem('initialState', JSON.stringify(newState))
          
          return newState
        }
      case "ADD_NOTE":
        {
          const currentNote = {
            id: generateId(),
            title: "ملاحظة جديدة", 
            content:""
          };

          let newState = {...state}

          newState.currentFolder.notes.push(currentNote);

          newState = {...state, currentNote}

          localStorage.setItem('initialState', JSON.stringify(newState))

          return newState;
        }
      case "SET_CURRENT_FOLDER":
        {

          if (state.currentFolder.id===action.payload){ return state}

          const newState = saveNote({...state});

          const currentFolder = newState.folders.find(folder => folder.id === action.payload);

          const currentNote = currentFolder.notes[0];

          return { ...newState , currentFolder, currentNote};
        }
      case "SET_CURRENT_NOTE":
        {
          
          if (state.currentNote.id === action.payload) return state

          const newState = saveNote({...state});
 
          newState.currentNote = newState.currentFolder.notes.find(note => note.id === action.payload);
          
          localStorage.setItem('initialState', JSON.stringify(newState))

          return newState;
        }

      case "TOGGLE_COLLAPSE_FOLDERS_PAN": 
        {
          const menuCollapsed = action.payload;
          
          return { ...state,  menuCollapsed};
        }

      default:
        return state;
    }

  };


export default reducer;
