import React from 'react';
import OneFolder from './oneFolder';
import { useStateValue } from '../stateProvider';
import { motion } from 'framer-motion';



function ListFolders(){
    const [{folders}, dispatch] = useStateValue();    

    const handleAddNewFolder = () => {
        dispatch({
            type: "ADD_FOLDER",
            payload: null
        })
    } 

    return (
            <div className={"folders-pan"}>
                <div className="title">
                <h1>الـمجلدات</h1>
                <span onClick={handleAddNewFolder} className="new-item icon">
                    <i className="fa fa-plus-circle"></i>
                </span>
                </div>
                <motion.ul variants={container} initial="before" animate="after" layout>

                    {folders.map(folder =>(
                        <OneFolder 
                        key={folder.id} 
                        id = {folder.id}
                        name={folder.name} 
                        />
                        ))}
                </motion.ul>
                </div>
    );
}


// for animation
const container = {
    before: {  },
    after: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
}

export default ListFolders;