import React from 'react';
import styled from 'styled-components';

const StyledSmurf = styled.div`
  box-shadow: 0 0 1rem rgba(0,0,0,.5);
  margin: .5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: rgb(161, 21, 29);
  color: white;
  position: relative;
`

const StyledName = styled.h3`
  font-size: 2rem;
  border-radius: 5px;
  padding: 1rem 2rem;
  background: rgb(0, 49, 116);
  margin-bottom: 0;
`

const StyledAge = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 4px;
  background: rgba(0,0,0, .3);
  padding: .5rem;
  margin: 0;
`

const StyledHeight = styled.p`
  margin: 0;
  padding: .5rem;
`

const Smurf = props => {
  return (
    <StyledSmurf>
      <StyledName>{props.name}</StyledName>
      <StyledHeight><strong>{props.height} tall</strong></StyledHeight>
      <StyledAge>{props.age} smurf years old</StyledAge>
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

