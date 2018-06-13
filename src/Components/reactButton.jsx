import React from "react";
import ReactDOM from 'react-dom';

// fs.read to read the data that's in the other file.

class button extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          value: ' '
      };
      this.changeSymbol = this.changeSymbol.bind(this)    
    }

    changeSymbol(){
        console.log('state before', this.state.value)
        if(this.state.value === ' '){
          this.setState({value:'X'})
        } else if (this.state.value === 'X'){
          this.setState({value:'O'})
        } else {
          this.setState({value: ' '})
        }
    }


    
    
    render () {
        return (
            <button id='button' onClick={this.changeSymbol}>
                {this.state.value}    
            </button>
        )
    }
}

export default button