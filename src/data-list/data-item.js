import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  &>.name{
    font-size: 1.2em;
    color: grey;
    margin-left:10px;
    margin-right:10px
  }
  &>.username{
    font-size: 1.1em;
    color: grey;
  }
`

const DataItem = ({itemData}) => {
  const {username, name, body} = itemData;

  return <StyledWrapper>
    <span className={'name'}>{name}</span>
    <span className={'username'}><b>{username}</b></span>
    <p className={'body'}>{body}</p>
    <hr/>
  </StyledWrapper>
}

export default DataItem