import React, { Component } from 'react';
import Questions from './Containers/Questions';

class App extends Component {

  render() {
    return (
      <div className="container">
       <h1>Australian Trivia Quiz</h1>
       <Questions />
      </div>
    );
  }
}

export default App;