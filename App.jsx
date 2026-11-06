import React, { Component } from 'react';
class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      ballPosition: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  buttonClickHandler = () => {
    this.setState({ gameStarted: true });
  };
  handleKeyDown = (event) => {
    if (this.state.gameStarted && event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };
  renderChoice = () => {
    const { gameStarted, ballPosition } = this.state;
    if (!gameStarted) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start Game
        </button>
      );
    }
    return (
      <div
        className="ball"
        style={{
          position: 'relative',
          left: `${ballPosition}px`,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'white',
          border: '1px solid black',
        }}
      />
    );
  };
  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.renderChoice()}
      </div>
    );
  }
}
export default GolfGame;