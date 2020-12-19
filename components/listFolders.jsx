import React from 'react';
import OneFolder from './oneFolder';
import { useStateValue } from '../stateProvider';



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
                    {folders.map(folder =>(
                        <OneFolder 
                            key={folder.id} 
                            id = {folder.id}
                            name={folder.name} 
                        />
                    ))}
                </div>
    );
}

export default ListFolders;