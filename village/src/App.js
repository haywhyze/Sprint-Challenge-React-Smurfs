import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      loading: false,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  fetchSmurfs = () => {
    this.setState({ isLoading: true })
    axios.get(url)
      .then(response => {
        this.setState({
          smurfs: response.data,
        })
      })
      .catch(error => {
        error.response && console.error(error.response.statusText)
      })
      .finally(()=> this.setState({loading: false}))
  }

  addSmurf = (newSmurf) => {
    this.setState({ loading: true })
    axios.post(url, newSmurf)
      .then(() => {
        this.fetchSmurfs()
      })
  }

  componentDidMount() {
    this.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
