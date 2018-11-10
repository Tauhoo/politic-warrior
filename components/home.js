import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  position: fixed;
  background-color: white;
  top: ${props => (props.isDisplay ? '0px' : '-100vh')};
  height: 100vh;
  width: 100vw;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Name = styled.span`
  font-family: 'Roboto';
  font-size: 3em;
`
const Detail = styled.span`
  width: 50%;
  text-align: center;
  font-family: 'Kanit';
  color: #2d3436;
`
export default class extends Component {
  state = { isShow: true }

  componentWillReceiveProps(nextProps) {
    this.setState({ isShow: nextProps.isShow })
  }
  render() {
    return (
      <Container isDisplay={this.state.isShow}>
        <Name>Politic Warrior</Name>
        <Detail>{`เราได้รวบรวมนักการเมืองในไทยมากมายไว้แล้ว มาดูประวัติและข้อมูลคนที่ท่านสนใจกัน`}</Detail>
      </Container>
    )
  }
}
