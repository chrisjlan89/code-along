import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loading: true,
    };
  }

  // change code below this line

  componentDidMount() {
    console.log(
      "Hellloooo, maybe I want to fetch data in here??? Or register an event listener maybe ???"
    );
    // document.addEventListener("resize", (e) => {
    //   console.log(e, "???");
    // });
  }

  componentDidUpdate() {
    console.log("I updated!!!");
    // if (this.state.count > 0) {
    //   alert("postitve num");
    // }
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={(e) => this.increment(e)}>
          Increment!
        </button>
        <button className="dec" onClick={() => this.decrement()}>
          Decrement!
        </button>
        <button className="reset" onClick={(e) => this.reset(e)}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
