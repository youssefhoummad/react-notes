import React from 'react';
import EasyEdit, { Types } from "react-easy-edit";
import {motion} from 'framer-motion';

import { useStateValue } from '../stateProvider';

function OneNote ({note}){
    const [{currentNote}, dispatch] = useStateValue();

    const noteStyle = () => {
        if (currentNote.id === note.id){
            return "item active";
        }
        return "item";
    }

    const save = (value) => {
        dispatch({
            type: "RENAME_NOTE",
            payload: value
        })

      };


    const handleSelectNote = () => {
        dispatch({
            type: "SET_CURRENT_NOTE",
            payload: note.id,
          });
    }


    return (
        <motion.li
        variants={item}
        className={noteStyle()} 
        onClick={handleSelectNote}
        >
            <div className="note-subject">
                <EasyEdit
                    type={Types.TEXT}
                    onSave={save}
                    value={note.title || ""}
                    attributes={{ className: "renamed-input"  }}
                    hideCancelButton={true}
                    hideSaveButton={true}
                    placeholder={"اسم الملاحظة"}
                />
            </div>
        </motion.li>
    );
}


  // for animation
const item = {
    before: { y: -20, opacity: 0 },
    after: {
      y: 0,
      opacity: 1
    }
}

export default OneNote;