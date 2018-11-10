import React, { Component } from 'react'
import styled from 'styled-components'
const Name = styled.span`
  position: absolute;
  top: 60px;
  left: 90px;
  font-size: 6em;
`
const Effect = styled.span`
  position: absolute;
  width: 820px;
  background-color: white;
  font-size: 2.5em;
  top: 1129px;
  transform: translateX(-50%);
  left: 500px;
`
export default class extends Component {
  state = { picture: '', effect: '', name: '' }
  componentDidMount() {
    let Params = new URLSearchParams(window.location.search)
    this.setState({
      picture: Params.get('picture'),
      effect: Params.get('effect'),
      name: Params.get('name'),
    })
  }
  render() {
    return (
      <>
        <img
          src={`https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=x&cardtype=Monster&subtype=normal&attribute=Light&level=1&rarity=Common&picture=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FNakorn_Machim_official_2018.jpg&circulation=&set1=&set2=&type=&carddescription=x&atk=&def=&creator=&year=2018&serial=`}
          width="1000px"
        />
        <Name>{this.state.name}</Name>
        <Effect>{this.state.effect}</Effect>
      </>
    )
  }
}
