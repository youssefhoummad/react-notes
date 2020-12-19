import React from 'react';
import EasyEdit, { Types } from "react-easy-edit";
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
        <div 
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
            {/* <div className="note-snippet">
                <p>{note.content.split(" ").slice(0, 4).join(" ") + "..."}</p>
            </div> */}

        </div>
    );
}

export default OneNote;