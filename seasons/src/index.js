import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.lat && !this.state.errMessage) {
      return <div>latitude: {this.state.lat}</div>;
    }

    if (!this.state.lat && this.state.errMessage) {
      return <div>error: {this.state.errMessage}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
