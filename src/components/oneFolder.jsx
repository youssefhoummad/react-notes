import { motion } from 'framer-motion';
import React from 'react';
import EasyEdit, { Types } from "react-easy-edit";
import { useStateValue } from '../stateProvider';


function OneFolder({id, name}){

    const [{currentFolder}, dispatch] = useStateValue();


    const save = (value) => {
        dispatch({
            type: "RENAME_FOLDER",
            payload: value
        })

      };

    const handleSelectFolder = () => {
        dispatch({
            type: "SET_CURRENT_FOLDER",
            payload: id,
          });        
    }

    return (
        <motion.li 
        variants={item}
            className={currentFolder.id===id?"item active":"item"}
            onClick={handleSelectFolder}
        >
            <span className="icon">
                <i className="fa fa-folder-open-o"></i>
            </span>
            <EasyEdit
                type={Types.TEXT}
                onSave={save}
                value={name || ""}
                attributes={{ className: "renamed-input" }}
                hideCancelButton={true}
                hideSaveButton={true}
                placeholder={"اسم المجلد"}
                // onValidate={value => {return value!==""}}
                // validationMessage={"أدخل اسما للمجلد"}

            />
        </motion.li>
    );
}

  // for animation
  const item = {
    before: { x: 20 },
    after: { x: 0}
}

export default OneFolder;