import React from 'react';

const ToolbarEditor = () => {

    return ( 
<div className="toolbar">

    <div className="group">
        <a href="/#"><i className="fa fa-bold"></i></a>
        <a href="/#"><i className="fa fa-underline"></i></a>
        <a href="/#"><i className="fa fa-italic"></i></a>
    </div>

    <div className="group">
        <a href="/#"><i className="fa fa-header"></i>1</a>
        <a href="/#"><i className="fa fa-header"></i>2</a>
        <a href="/#"><i className="fa fa-header"></i>3</a>
    </div>

    <div className="group">
        <a href="/#"><i className="fa fa-list-ul"></i></a>
        <a href="/#"><i className="fa fa-list-ol"></i></a>
    </div>
</div>
);
}
 
export default ToolbarEditor;