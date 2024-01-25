import React from "react";

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0,
    };
  }

  componentDidMount() {
    this.setState({ currentTab: 2 });
  }

  componentDidUpdate() {
    console.log("Updated", this.state);
  }

  render() {
    return (
      <div>
        <header>
          <button onClick={() => this.setState({ currentTab: 1 })}>
            Tab 1
          </button>
          <button onClick={() => this.setState({ currentTab: 2 })}>
            Tab 2
          </button>
          <button onClick={() => this.setState({ currentTab: 3 })}>
            Tab 3
          </button>
        </header>
        <main>
          {this.state.currentTab === 1 && <Tab data="Tab 1" />}
          {this.state.currentTab === 2 && <Tab data="Tab 2" />}
          {this.state.currentTab === 3 && <Tab data="Tab 3" />}
        </main>
      </div>
    );
  }
}

class Tab extends React.Component {
  componentWillUnmount() {
    console.log("Unmounted ", this.props.data);
  }

  componentDidMount() {
    console.log("Mounted", this.props.data);
  }

  render() {
    return <h1>{this.props.data}</h1>;
  }
}
