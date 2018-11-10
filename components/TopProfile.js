import React from 'react'
import styled from 'styled-components'
import Image from '../libs/Image'
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0em 1em 0em;
`
const SubContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`

export default props => (
  <Container>
    <SubContainer>{Image(props.image)}</SubContainer>
  </Container>
)
