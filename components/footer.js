import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  background-color: #2d3436;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const LinkGroup = styled.div``
const Text = styled.div`
  font-family: 'Roboto';
  color: white;
  font-size: 0.5em;
`
const Logo = styled.img`
  height: 20px;
  width: 20px;
`
export default () => (
  <Container>
    <LinkGroup>
      <a href="https://www.facebook.com/tauhoo.ice" target="_blank">
        <Logo src="/static/facebook.svg" />
      </a>
      <a href="https://github.com/Tauhoo/politic-warrior" target="_blank">
        <Logo src="/static/github.svg" />
      </a>
    </LinkGroup>
    <Text>Made by wachirawit wacharak, 2018.</Text>
  </Container>
)
