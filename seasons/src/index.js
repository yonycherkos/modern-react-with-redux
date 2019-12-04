import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentWillMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errMessage) {
      return <div>error: {this.state.errMessage}</div>;
    }

    return <Spinner message="Please accept location request!" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
