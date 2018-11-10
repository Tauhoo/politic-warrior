import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.5em 0px 0.5em 0px;
  box-sizing: border-box;
  align-items: center;
`
const TopicContainer = styled.div`
  width: 90%;
  background-color: black;
  border-radius: 5px 5px 0px 0px;
  padding: 0.5em 1em;
  box-sizing: border-box;
`
const Topic = styled.span`
  font-size: 2em;
  font-family: 'Kanit';
  color: white;
  font-family: 'Roboto';
`
const Paragraph = styled.span`
  font-family: 'K2D';
  font-size: 1em;
  display: block;
`
const ParagraphTopic = styled.span`
  width: 100%;
  font-family: 'Kanit';
  font-size: 1.5em;
  display: block;
`
const SubContainer = styled.div`
  width: 90%;
  background-color: gray;
  padding: 0.5em 1em 1em 1em;
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
`

const renderData = () => {}
export default class extends Component {
  state = { data: [] }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data })
  }
  render() {
    return (
      <Container>
        <TopicContainer>
          <Topic>Hisory</Topic>
        </TopicContainer>
        <SubContainer>
          <ParagraphTopic>ประวัติ</ParagraphTopic>
          <Paragraph>
            pมมแหงกวแหงกแใหกงวแใฟหดอืฟสดาอืฟสกดาหือาฟ่หดือา่ฟดืกาอ่ืฟดา่อืฟาก่ดือา่ฟดือา่ฟกดืาอืฟกดา่อืาฟ่ดือา่ฟหดทืแฟหา่กืแสาหกแ
          </Paragraph>
        </SubContainer>
      </Container>
    )
  }
}
