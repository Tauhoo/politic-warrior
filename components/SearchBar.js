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
const PreviewName = styled.button`
  width: 100%;
  padding: 2px;
  display: block;
  font-size: 1em;
  font-family: 'K2D';
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  background-color: gray;
  &:hover {
    background-color: white;
  }
`
export default class extends Component {
  state = { input: [], keyword: '', isSuggest: false, isHover: false }
  update = (input, keyword) => {
    if (input === []) return
    console.log(input, keyword)
    if (input.includes(keyword)) {
      this.props.UpDateState(keyword)
      this.setState({ isSuggest: false, isHover: false })
      return
    }
  }
  onchange = e => {
    let input = e.target.value
    this.setState({
      input: input === '' ? [] : searcher(input),
      keyword: input,
      isSuggest: true,
    })
  }
  onsubmit = e => {
    e.preventDefault()
    let { input, keyword } = this.state
    this.update(input, keyword)
  }
  onclick = index => () => {
    this.update(this.state.input, this.state.input[index])
  }
  onmouseenter = () => {
    this.setState({ isHover: true })
  }
  onmouseout = () => {
    this.setState({ isHover: false })
  }
  setSuggest = isSuggest => () => {
    this.setState({ isSuggest: isSuggest || this.state.isHover })
  }
  render() {
    return (
      <Container onSubmit={this.onsubmit}>
        <Bar
          onChange={this.onchange}
          onFocus={this.setSuggest(true)}
          onBlur={this.setSuggest(false)}
        />
        <Icon src="/static/search.svg" />
        <PreviewContainer
          isDisplay={this.state.input.length && this.state.isSuggest}
          onMouseEnter={this.onmouseenter}
          onMouseLeave={this.onmouseout}
        >
          {this.state.input.map((name, i) => (
            <PreviewName key={i} onClick={this.onclick(i)}>
              {name}
            </PreviewName>
          ))}
        </PreviewContainer>
      </Container>
    )
  }
}
