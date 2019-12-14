import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        if (this.state.mood === 'happy') {
            return this.setState({mood: 'sad'})
        } else {
            return this.setState({mood: 'happy'})
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
