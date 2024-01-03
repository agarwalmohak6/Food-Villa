import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count = {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
        <h1>I am a class based component</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Lakhimpur-Kheri</h3>
      </div>
    );
  }
}

export default UserClass;

// Any class to be a class based component, we need to extend React.Component
// and then create a render() method where we return JSX

// To get props we need to create a constructor and also use a super keyword inside our constructor to call the parent class constructor
// and then use this.props to get the props inside our class

// Loading class based component on a web page means creating a new instance of this class, so this is basically the best place to create state variables and receive props

// To create state variables we use this.state and to update it we use this.setState in class based components
