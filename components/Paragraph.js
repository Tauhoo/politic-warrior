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
  background-color: #2d3436;
  border-radius: 5px 5px 0px 0px;
  padding: 0.5em 1em;
  box-sizing: border-box;
`
const Topic = styled.span`
  font-size: 2em;
  font-family: 'Kanit';
  color: white;
`
const Paragraph = styled.span`
  font-family: 'kanit';
  font-size: 1em;
  display: block;
  color: #2d3436;
`
const ParagraphTopic = styled.span`
  width: 100%;
  font-family: 'Kanit';
  font-size: 1.5em;
  display: block;
  margin: 1em 0em;
`
const SubContainer = styled.div`
  width: 90%;
  background-color: #dfe6e9;
  padding: 0.5em 1em 1em 1em;
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
`
const renderData = ([topic, ...data]) => {
  if (topic.title === 'อ้างอิง' || topic.title === 'ดูเพิ่ม') return <></>
  let allDetail = data.map(detail => detail.detail.join('')).join('')
  if (allDetail === '' && topic.detail.join('') === '') return <></>
  let result =
    data.length === 0 &&
    (topic.detail.length === 0 || topic.detail[0] === '') ? (
      <div key={i} />
    ) : (
      <Container>
        <TopicContainer>
          <Topic>{topic.title === '' ? 'ประวัติทั่วไป' : topic.title}</Topic>
        </TopicContainer>
        <SubContainer>
          {data.length === 0 ? (
            <Paragraph>{topic.detail}</Paragraph>
          ) : (
            data.map((detail, i) =>
              detail.detail.join('') === '' ? (
                <></>
              ) : (
                <div key={i}>
                  <ParagraphTopic>{detail.title}</ParagraphTopic>
                  <Paragraph>{detail.detail}</Paragraph>
                </div>
              ),
            )
          )}
        </SubContainer>
      </Container>
    )
  return result
}
export default class extends Component {
  render() {
    return renderData(this.props.data)
  }
}
