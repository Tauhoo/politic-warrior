import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import TopProfile from '../components/TopProfile'
import Paragraph from '../components/Paragraph'
import getData from '../libs/getData'
import getCard from '../libs/getCard'
import Home from '../components/home'
import Footer from '../components/footer'
import styled from 'styled-components'
const CardButton = styled.button`
  border: 0px;
  border-radius: 5px;
  background-color: black;
  padding: 0.25em 1em;
  display: ${props => (props.isDisplay ? 'block' : 'none')};
  transform: translate(-50%, -50%);
  margin-left: 50vw;
`
const TextLink = styled.a`
  color: white;
  text-decoration: none;
`
const Name = styled.h1`
  font-size: 2em;
  font-family: 'K2D';
  margin-top: 30px;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  span {
    font-size: 2em;
    color: white;
    font-family: 'Roboto';
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`
const renderData = data => data.map(paragraph => <Paragraph data={paragraph} />)
export default class extends Component {
  state = {
    name: '',
    data: [],
    subDetail: {},
    imageUrl: '',
    isShow: true,
    cardLink: '',
  }
  upDateState = async name => {
    this.setState({ isShow: true })
    setTimeout(
      async function() {
        let { result, subDetail, imageUrl } = await getData(name).then(
          res => res,
        )
        let Card = await getCard(name, result, imageUrl)
        this.setState({
          data: result,
          subDetail: subDetail,
          imageUrl: imageUrl,
          cardLink: Card,
          name,
        })
        this.setState({ isShow: false })
      }.bind(this),
      600,
    )
  }
  render = () => (
    <div>
      <Navbar UpDateState={this.upDateState} />
      <Top>
        <span>Politic Warrior</span>
        <span>Politic Warrior</span>
      </Top>
      <Home isShow={this.state.isShow} />
      <Name>{this.state.name}</Name>
      <TopProfile image={this.state.imageUrl} />
      <CardButton isDisplay={this.state.cardLink !== ''}>
        <TextLink href={this.state.cardLink}>ดูรูปแบบการ์ด</TextLink>
      </CardButton>
      {renderData(this.state.data)}
      <Footer />
    </div>
  )
}
