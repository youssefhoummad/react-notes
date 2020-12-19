import React from 'react';
import EditorState from 'draft-js';


const NotesContext = React.createContext({
    currentFolder : null, 
    currentNote : null,
    folders: [
        {
            id:1,
            name: "folder1",
            notes: [
                {
                    id: 1,
                    title: "note 1",
                    content: " test"
                },
                {
                    id: 2,
                    title: "note 2",
                    content: " kjsnkds"
                },
                    ]
        },
    ]

})
export default NotesContext;