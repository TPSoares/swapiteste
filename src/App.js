import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],

    }

    this.getChar = this.getChar.bind(this);
  }

  getChar() {
    return axios.get("https://swapi.co/api/people").then((response) => {
      console.log(response.data.results);
      this.setState({people: response.data.results})
    })
  }

  componentDidMount() {
    this.getChar()
  }

  render() {

    const {people} = this.state;

    return (
      <div className="App">
        <List people={people} />
      </div>
    );
  }
}

export default App;
