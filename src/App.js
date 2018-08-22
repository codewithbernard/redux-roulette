import React, { Component } from "react";
import { connect } from "react-redux";
import RouletteWheel from "./components/RouletteWheel";
import { roll } from "./actions";
class App extends Component {
  render() {
    const { roll } = this.props;

    return (
      <div className="App">
        <RouletteWheel />
        <button onClick={roll}>Roll</button>
      </div>
    );
  }
}

const mapStateToProps = ({ roulette }) => {
  return {
    roulette
  };
};

export default connect(
  mapStateToProps,
  { roll }
)(App);
