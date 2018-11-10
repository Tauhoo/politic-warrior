import React from 'react'
import styled from 'styled-components'
const Image = styled.img`
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 80vh;
  border-radius: 5px;
`
export default url => <Image src={url} />
