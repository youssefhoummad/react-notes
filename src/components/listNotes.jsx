import React from 'react';
import { motion} from 'framer-motion'
import { useStateValue } from '../stateProvider';

import OneNote from './oneNote'

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
        <div  className="notes-pan">
            <div className="title">
                <span onClick={handleCollapseFoldersPan} className="new-item icon">
                    <i className={iconDirection()}></i>
                </span>
                <h1>الـملاحظات</h1>
                <span onClick={handleAddNewNote} className="new-item icon">
                    <i className="fa fa-plus-circle"></i>
                </span>
                </div>
    
                    <motion.ul layout
                        variants={container} 
                        initial="before"
                        animate="after"

                    >
                    {currentFolder.notes.map(note=>(
                        <OneNote 
                            key={note.id} 
                            note={note}
                        />
                    ))}
                    </motion.ul>
                
        </div>
    );
}

// for animation
const container = {
    before: { opacity: 1, scale: 0 },
    after: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
}

export default ListNotes;