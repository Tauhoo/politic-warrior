import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
const Container = styled.div`
  background-color: black;
  width: 100vw;
  padding: 5px;
  display: flex;
  box-sizing: border-box;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 650px) {
    justify-content: center;
    padding: 5px;
  }
`
const Logo = styled.span`
  font-size: 1em;
  font-family: 'Roboto';
  @media (max-width: 650px) {
    font-size: 2em;
  }
  color: white;
`
export default props => (
  <Container>
    <LogoContainer>
      <Logo>Politic Warrior</Logo>
    </LogoContainer>
    <SearchBar UpDateState={props.UpDateState} />
  </Container>
)
