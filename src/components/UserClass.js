import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h1>I am a class based component</h1>
        <h2>Name: Mohak Agarwal</h2>
        <h3>Location: Lakhimpur-Kheri</h3>
      </div>
    );
  }
}

export default UserClass;

// Any class to be a class based component, we need to extend React.Component
// and then create a render() method where we return JSX
