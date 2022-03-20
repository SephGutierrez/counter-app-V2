import React, { Component } from 'react'

class Highscore extends Component {

    render() {

        if(this.props.overTen){
            return (
                <h3>Ooooops! You've reach Highscore
                    <button onClick={this.props.onReset}>RESET-Btn</button>
                </h3>
                
            )
        } else {
            return null;
        };

       
    }
}

export default Highscore;