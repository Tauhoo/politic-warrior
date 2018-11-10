import React from 'react'
import styled from 'styled-components'
import Image from '../libs/Image'
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 1em 0em 1em 0em;
`
const SubContainer = styled.div`
  width: 90%;
  display: flex;
  div {
    flex: 1;
  }
`

export default props => (
  <Container>
    <SubContainer>
      <div>{Image(props.image)}</div>
      <div />
    </SubContainer>
  </Container>
)
