import React from "react";

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  };

  changeMood = () => {
    const newMood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({ mood: newMood });
  };
  render() {
    return <div onClick={this.changeMood}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
