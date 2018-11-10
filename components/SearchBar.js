import React, { Component } from 'react'
import searcher from '../libs/searcher'
import styled from 'styled-components'
const Container = styled.form`
  background-color: white;
  display: flex;
  flex: 1;
  border-radius: 5px;
  padding: 2px;
  position: relative;
  float: right;
  @media (max-width: 650px) {
    width: 100%;
  }
`
const Bar = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  padding: 1px 1px 1px 5px;
  font-family: 'K2D';
`
const Icon = styled.img`
  height: 20px;
  @media (max-width: 650px) {
    height: 30px;
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
  font-family: 'K2D';
`
const Preview = list => (
  <PreviewContainer isDisplay={list.length}>
    {list.map((name, i) => (
      <PreviewName key={i}>{name}</PreviewName>
    ))}
  </PreviewContainer>
)
export default class extends Component {
  state = { input: [], keyword: '' }
  onchange = e => {
    let input = e.target.value
    this.setState({
      input: input === '' ? [] : searcher(input),
      keyword: input,
    })
  }
  onsubmit = e => {
    e.preventDefault()
    let { input, keyword } = this.state
    if (input === []) return
    if (input[0] === keyword) {
      this.props.UpDateState(keyword)
      return
    }
  }
  render() {
    return (
      <Container onSubmit={this.onsubmit}>
        <Bar onChange={this.onchange} />
        <Icon src="/static/search.svg" />
        {Preview(this.state.input)}
      </Container>
    )
  }
}
