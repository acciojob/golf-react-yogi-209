
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

  // Show the ball when button is clicked
  buttonClickHandler = () => {
    this.setState({
      renderBall: true
    });
  };

  // Move the ball when Right Arrow is pressed
  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      this.setState((prevState) => ({
        pos: prevState.pos + 5
      }));
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {!this.state.renderBall ? (
          <button
            className="start"
            onClick={this.buttonClickHandler}
          >
            Click For Ball
          </button>
        ) : (
          <div
            className="ball"
            style={{
              position: 'absolute',
              left: `${this.state.pos}px`
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default App;
