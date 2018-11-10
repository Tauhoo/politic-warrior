import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
const Container = styled.div`
  background-color: black;
  width: 100vw;
  padding: 5px;
  display: flex;
`
const LogoContainer = styled.div`
  height: 10px;
  width: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    height: 20px;
    width: 20px;
  }
`
const Logo = styled.span`
  font-size: 2em;
  color: white;
`
export default () => (
  <Container>
    <LogoContainer>
      <Logo>ice</Logo>
    </LogoContainer>
    <SearchBar />
  </Container>
)
