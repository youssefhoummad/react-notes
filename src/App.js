import React from 'react';
import ListFolders from './components/listFolders';
import ListNotes from './components/listNotes';
import Editor from './components/Editor';

import { useStateValue } from './stateProvider';
import './App.css';


const App = () => {

  const [{menuCollapsed}, ] = useStateValue();


  return (
    <div className="App">
      {/* <button onClick={handleDeleteNote} className="delete_note">Delete</button> */}
        <React.Fragment>
          <aside className={"folders " + menuCollapsed}> 
              <ListFolders />
          </aside>
          <aside className="notes">
              <ListNotes />
          </aside>
          <section className="editor">
              <Editor />
          </section>
        </React.Fragment>
    </div>
  );
}




export default App;
