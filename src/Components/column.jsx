import React from "react";
import ReactDOM from 'react-dom';
import Reactbutton from './reactButton.jsx';

// fs.read to read the data that's in the other file.

class column extends React.Component {
    
    render () {
        let arr = [];
        arr.push(<Reactbutton/>)
        arr.push(<Reactbutton/>)
        arr.push(<Reactbutton/>)
        return (
            <div id='col'>{arr}</div>
        )
    }
}

export default column