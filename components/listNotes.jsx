import React from 'react';
import OneNote from './oneNote'
import { useStateValue } from '../stateProvider';

function ListNotes(){    
    const [{currentFolder, menuCollapsed}, dispatch] = useStateValue();


    const iconDirection = () => {
        if (menuCollapsed){
            return "fa fa-angle-left"
        }
        return "fa fa-angle-right"
    }

    const handleCollapseFoldersPan = () =>{
        let collapsed = "";
        if (menuCollapsed==="") collapsed="collapsed";

        dispatch({
            type: 'TOGGLE_COLLAPSE_FOLDERS_PAN',
            payload: collapsed
        })
    }

    const handleAddNewNote = () => {

        dispatch({
            type: "ADD_NOTE",
            payload: null
        })
    } 
    

    return (
        <div className="notes-pan">
            <div className="title">
                <span onClick={handleCollapseFoldersPan} className="new-item icon">
                    <i className={iconDirection()}></i>
                </span>
                <h1>الـملاحظات</h1>
                <span onClick={handleAddNewNote} className="new-item icon">
                    <i className="fa fa-plus-circle"></i>
                </span>
                </div>
            {currentFolder.notes.map(note=>(
                <OneNote 
                    key={note.id} 
                    note={note}
                 />
            ))}
        </div>
    );
}

export default ListNotes;