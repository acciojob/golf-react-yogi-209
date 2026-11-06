import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      pos: 0
    };
  }

  buttonClickHandler = () => {
    this.setState({
      renderBall: true
    });
  }

  handleKeyDown = (event) => {
    // Check for Right Arrow key (keyCode 39 or key 'ArrowRight')
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.setState((prevState) => ({
        pos: prevState.pos + 5
      }));
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  renderChoice = () => {
    if (this.state.renderBall) {
      return (
        <div 
          className="ball" 
          style={{ 
            left: `${this.state.pos}px`, 
            position: 'absolute' 
          }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Click For Ball
        </button>
      );
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderChoice()}
      </div>
    );
  }
}
export default App;