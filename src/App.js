import React, { Component } from 'react';

//parent component
class Game extends Component {
  render() {
    return (
      <Question /> 
    );
  }
}

//child component
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Kill Bill v1'
    }
  }
  
  render(){
    return (
      <button
        onClick={() => this.setState({selectedOption: 'Kill Bill v2'})}
      >
      {this.state.selectedOption}
      </button>
    );
  }
}

export default Game; 

