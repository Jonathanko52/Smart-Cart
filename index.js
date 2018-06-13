import React from "react";
import ReactDOM from 'react-dom';
import Column from './src/Components/column.jsx'

// fs.read to read the data that's in the other file.

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rowOne : [' ',' ',' '],
            rowTwo : [' ',' ',' '],
            rowThree : [' ',' ',' ']

        };
        this.changeSymbol = this.changeSymbol.bind(this)    
    }

    changeSymbol(x){
        

    }
    
    render () {
        let arr = [];
        arr.push(<Column />)
        arr.push(<Column />)
        arr.push(<Column />)

        return (
            arr
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("scotttt"));
