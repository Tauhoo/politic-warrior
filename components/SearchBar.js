import React, { Component } from 'react'
import searcher from '../libs/searcher'
import styled from 'styled-components'
const Container = styled.div`
  background-color: white;
  display: flex;
  width: 30vw;
  border-radius: 5px;
  padding: 2px;
  position: relative;
  @media (max-width: 650px) {
    width: 50%;
  }
`
const Bar = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  padding: 1px 1px 1px 5px;
`
const Icon = styled.img`
  height: 20px;
  @media (max-width: 650px) {
    height: 40px;
  }
`
const PreviewContainer = styled.div`
  margin-top: 0.25em;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: gray;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  display: ${props => (props.isDisplay ? 'block' : 'none')};
`
const PreviewName = styled.span`
  padding: 2px;
  display: block;
  font-size: 1em;
`
const Preview = list => (
  <PreviewContainer isDisplay={list.length}>
    {list.map(name => (
      <PreviewName>{name}</PreviewName>
    ))}
  </PreviewContainer>
)
export default class extends Component {
  state = { input: [] }
  onchange = e => {
    let input = e.target.value
    this.setState({ input: input === '' ? [] : searcher(input) })
  }
  render() {
    return (
      <Container>
        <Bar onChange={this.onchange} />
        <Icon src="/static/search.svg" />
        {Preview(this.state.input)}
      </Container>
    )
  }
}
