import React, { Component } from 'react';
import Highscore from './Highscore';

class App extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(props,state) {
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen){
            console.log('Ohh no, you reached maximum points of 10!');
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        console.log("Event is", e);
        this.setState({
            count: 0,
            overTen: false
        })
    }
    

 render () {

     const {count} = this.state;

     return (
         <div>
             <h3>You clicked the button {count} times</h3>
                <Highscore 
                overTen = {this.state.overTen}
                onReset = {this.resetCount}
                />
            
        <span>
            <button onClick = {() => this.handleClick()}>Click Me</button>
        </span>
        </div>
     );
 }
}

export default App; 