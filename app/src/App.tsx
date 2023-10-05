import React, { Component } from "react";
import "./App.css";
import { Input, Button } from "./Components";

class App extends Component {
  state = {
    firstName: "",
    secondName: "",
    age: "",
  };

  handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstName: e.target.value });
  }; 

  handleSecondNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ secondName: e.target.value });
  };

  handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ age: e.target.value });
  };

  show = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input
            name="First Name"
            type="text"
            placeholder="Enter your First name"
            onChange={this.handleFirstNameChange}
          />
          <Input
            name="Second Name"
            type="text"
            placeholder="Enter your Second name"
            onChange={this.handleSecondNameChange}
          />
          <Input
            name="Your Age"
            type="number"
            placeholder="Enter your age"
            onChange={this.handleAgeChange}
          />
          <Button onClick={this.show} name="Submit" />
        </header>
      </div>
    );
  }
}

export default App;
