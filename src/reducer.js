
export let initialState = {};

// localStorage.clear()


if (localStorage.length){

  initialState = JSON.parse(localStorage.getItem('initialState'))
  
} else {

  const folders = [{ id:"1608232926248vpmbk", name:"عن التطبيق"}]
    const notes = [{
          id:"1608232hjs926248vpmbk", 
          title:"لـمحة عن التطبيق", 
          content:`<div class="se-component se-image-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="width: 50%; margin: auto;"><img src="https://unsplash.com/photos/qaFKsIMv01Y/download?force=true&amp;w=640" data-rotate="" data-proportion="true" data-size="50%,auto" data-align="center" data-percentage="50%,auto" data-file-name="download?force=true&amp;w=640" data-file-size="0" data-origin="," origin-size="640,427" data-index="0" style="width: 100%; height: auto;"></figure></div><h2><span style="font-size: 2em;">الـملاحظات</span><br></h2><h2>تنسيقات عادية</h2><p>هذه الكلمة مكتوبة بشكل <strong>عريض</strong>&nbsp;وهذه مكتوبة بشكل <em>مائل </em><span style="color: rgb(51, 51, 51); font-family: ibm-plex-arabic, sans-serif; font-size: 15.4px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">هذه الكلمة مكتوبة بشكل<em> </em><del>مشطوب&nbsp;</del>هذه الكلمة مكتوبة بشكل <u>مسطر عليه</u></span></p><p>كما يمكنك <span style="color: rgb(0, 85, 255);">تلوين </span><span style="color: rgb(255, 0, 0);">الكلمات </span><span style="background-color: rgb(178, 204, 255);">وتظليلها </span><span style="background-color: rgb(206, 242, 121);">بألون مختلفة</span></p><h2>إدراج رابط أو صورة<br></h2><p>هذا رابط لصفحتي على <a href="https://github.com/youssefhoummad/" target="_blank">GITHUB&nbsp;</a>أو صورة كما بالأعلى<br></p><h2>قائمة منقطة</h2><ul><li>عنصر قائمة</li><li>&nbsp;عنصر قائمة</li><li>عنصر قائمة<br></li></ul><p>أو قائمة مرقمة</p><ol><li>عنصر قائمة</li><li>&nbsp;عنصر قائمة</li><li>عنصر قائمة</li></ol><h2>وأمور اخرى</h2><blockquote><p>هذا اقتباس جميل</p></blockquote><pre>وهذا إطار لكود برمجي<br></pre><p><br></p><p>أتمنى أن تُعجبوا بالتطبيق</p>`
        },
        {
          id:"1608kjndf232hjs92624hja8vpmbks3",
          title: "عن الـمطور",
          content: `<div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px;"><img src="https://avatars2.githubusercontent.com/u/25711246?s=460&amp;u=cd03daaebdb90e0cf9ea91ed126328672a4bec19&amp;v=4" alt="" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="," data-align="none" data-percentage="auto,auto" data-index="0" data-file-name="25711246?s=460&amp;u=cd03daaebdb90e0cf9ea91ed126328672a4bec19&amp;v=4" data-file-size="0" data-origin="," style=""></figure></div><h2>يوسف حمد</h2><div>youssef.hoummad@outlook.com</div><div>​<a href="https://github.com/youssefhoummad" target="_blank"><strong>GITHUB</strong></a><strong></strong>​</div>`
        }
    ]
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
      
        return state
}


const reducer = (state, action) => {
  
    switch (action.type) {

      case "DELETE_NOTE":
      {

        const newState = {...state};
        
        const notes = newState.currentFolder.notes.filter(n=> n.id !== state.currentNote.id)


        if (!notes.length) {

           if (newState.folders.length > 1){

              const folders = newState.folders.filter(f=> f.id !== state.currentFolder.id)

              newState.folders = folders;

              newState.currentFolder = newState.folders[0];

              newState.currentNote = newState.currentFolder.notes[0];

              localStorage.setItem('initialState', JSON.stringify(newState))

              return newState

           }

           newState.currentNote.id = generateId();

           newState.currentNote.title = "ملاحظة جديدة"
           
           newState.currentNote.content = `<div></div>`
          
           newState.tempNote = ""

           localStorage.setItem('initialState', JSON.stringify(newState))

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

          const newState = saveNote({...state})

          const currentFolder = {
            id: generateId(),

            name: "مجلد جديد",

            notes: [{ id: generateId(), title: "ملاحظة جديدة", content:""}]
          };
        
          newState.folders.push(currentFolder)

          newState.currentFolder = currentFolder;

          newState.currentNote = currentFolder.notes[0]

          localStorage.setItem('initialState', JSON.stringify(newState))
          
          return newState
        }
      case "ADD_NOTE":
        {

          const newState = saveNote({...state})

          const currentNote = {id: generateId(), title: "ملاحظة جديدة", content:""};

          newState.currentFolder.notes.push(currentNote);

          newState.currentNote = currentNote;

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
