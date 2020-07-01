import React from 'react';
import DataList from './data-list/data-list';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  &>.search {
    padding-top: 20px;
    padding-bottom: 20px
  }
  &>.loading {
    padding-top: 20px;
    padding-bottom: 20px
  }
`

const App = (props) => {
  const {isLoading, onFilterChange, ...restProps} = props
  return <StyledWrapper>
    <div className={"search"}>
      <label for={"search"}><b>Найти: </b></label>
      <input id="search" name="search" onChange={onFilterChange} defaultValue={''} />
    </div>
    {isLoading && <div className="loading"><i>...Loading...</i></div>}
    <DataList props={restProps} />
  </StyledWrapper>
}

export default App;
