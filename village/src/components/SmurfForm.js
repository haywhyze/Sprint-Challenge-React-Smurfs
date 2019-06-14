import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

const StyledInput = styled.input`
  display: block;
  margin: .5rem auto;
  padding: .5rem 1rem;
  border: none;
  border-bottom: 2px solid rgba(0, 49, 116, .5);
  width: 15rem;
  box-shadow: 0 0 20px rgba(0,0,0, .1);

  &:focus, &:active {
    outline: none;
    border-bottom: 2px solid rgba(0, 49, 116, .9);
  }
`

const StyledButton = styled.button`
  padding: .75rem 1.5rem;
  background: rgb(161, 21, 29);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0, .1);
  border-radius: .4rem;
`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <StyledForm onSubmit={this.addSmurf}>
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <StyledButton type="submit">Add to the village</StyledButton>
        </StyledForm>
      </div>
    );
  }
}

export default SmurfForm;
