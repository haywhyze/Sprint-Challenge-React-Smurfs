import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';
const StyledNavLinks = styled(NavLink)`
  padding: 1rem 2rem;
  margin: .5rem;
  display: inline-block;
  text-decoration: none;
  color: white;
  background: rgb(161,21,29);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      loading: false,
      errMessage: null,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  fetchSmurfs = () => {
    this.setState({ loading: true })
    axios.get(url)
      .then(response => {
        this.setState({
          smurfs: response.data,
          errMessage: null
        })
      })
      .catch(error => {
        
        error.response ? this.setState({
          errMessage: error.response.statusText
        }) : this.setState({
          errMessage: error.message
        })
      })
      .finally(()=> this.setState({loading: false}))
  }

  addSmurf = (newSmurf) => {
    this.setState({ loading: true })
    axios.post(url, newSmurf)
      .then((response) => {
        this.setState({
          smurfs: response.data,
          errMessage: null
        })
      })
      .catch(error => {
        error.response && console.error(error.response.statusText)
        error.response && this.setState({
          errMessage: error.response.statusText
        })
      })
      .finally(()=> this.setState({loading: false}))
  }

  deleteSmurf = (id) => {
    axios.delete(`${url}/${id}`)
      .then((response) => {
        this.setState({
          smurfs: response.data,
          errMessage: null
        })
      }).catch(error => {
        error.response && console.error(error.response.statusText)
        error.response && this.setState({
          errMessage: error.response.statusText
        })
      })
      .finally(()=> this.setState({loading: false}))
  }

  componentDidMount() {
    this.fetchSmurfs();
  }

  render() {
    const { loading, errMessage } = this.state;
    if (loading) return (<h1>Loading...</h1>)
    if (errMessage) return (<h1>{errMessage}</h1>)
    return (
      <Router>
        <div className="App">

        <StyledNavLinks to='/'>Smurfs</StyledNavLinks>
        <StyledNavLinks to='/smurf-form'>Add New Smurfs</StyledNavLinks>

        <Route
          exact
          path='/'
          render={(props => 
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf}
            />)
          }
        />
        <Route
          exact
          path='/smurf-form'
          render={(props => 
            <SmurfForm 
              {...props} 
              addSmurf={this.addSmurf} 
            />)
          }
        />
        </div>
      </Router>
    );
  }
}

export default App;
