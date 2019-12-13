import React, { Component } from 'react';

export class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    handleClick = () => {

        const mood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({ mood})
    }
    
    render() {
        return (
            <div onClick = {this.handleClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;

