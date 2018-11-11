import React, { Component } from 'react'
import styled from 'styled-components'
const Name = styled.span`
  position: absolute;
  top: 3vw;
  transform: translateX(-50%);
  left: 50vw;
  font-size: 3vw;
  @media (max-width: 650px) {
    top: 7vw;
    font-size: 5vw;
  }
`
const Effect = styled.span`
  position: absolute;
  width: 40vw;
  font-size: ${props => props.size * 1.5}vw;
  top: 57vw;
  left: 30vw;
  @media (max-width: 650px) {
    font-size: ${props => props.size * 3}vw;
    width: 80vw;
    left: 10vw;
    top: 114vw;
  }
`
const Image = styled.img`
  position: absolute;
  width: 50vw;
  transform: translateX(-50%);
  left: 50vw;
  @media (max-width: 650px) {
    width: 100vw;
    top: ;
  }
`

const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  padding: 0.25em 0.5em;
  background-color: #2d3436;
  position: absolute;
  left: 50vw;
  transform: translate(-50%, -50%);
  top: 75vw;
  color: white;
  margin-bottom: 1vw;
  @media (max-width: 650px) {
    top: 150vw;
  }
`
export default class extends Component {
  state = { picture: '', effect: '', name: '', stringSize: '' }
  componentDidMount() {
    let Params = new URLSearchParams(window.location.search)
    this.setState({
      picture: Params.get('picture'),
      effect: Params.get('effect'),
      name: Params.get('name'),
      stringSize: Params.get('effect').length > 160 ? 0.6 : 1,
    })
    console.log(Params.get('picture'), Params.get('effect'), Params.get('name'))
    console.log(Params.get('effect').length)
  }
  print = () => {
    window.print()
  }
  render() {
    return (
      <>
        <Image src={this.state.picture} />
        <Name>{this.state.name}</Name>
        <Effect size={this.state.stringSize}>{this.state.effect}</Effect>
        <Button onClick={this.print}>Print</Button>
      </>
    )
  }
}
