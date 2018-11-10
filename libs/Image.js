import React from 'react'
import styled from 'styled-components'
const Image = styled.img`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default url => <Image src={url} />
