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
  @media (max-width: 650px) {
    width: 100%;
  }
`

export default props => (
  <Container>
    <SubContainer>{Image(props.image)}</SubContainer>
  </Container>
)

//https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=x&cardtype=Monster&subtype=normal&attribute=Light&level=1&rarity=Common&picture=&circulation=x&set1=x&set2=x&type=x&carddescription=x&atk=x&def=x&creator=x&year=2018&serial=91005152
