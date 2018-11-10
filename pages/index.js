import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import TopProfile from '../components/TopProfile'
import Paragraph from '../components/Paragraph'
import getData from '../libs/getData'
import Image from '../libs/Image'

const renderData = data => data.map(paragraph => <Paragraph data={paragraph} />)
export default class extends Component {
  state = { name: '', data: [], subDetail: {}, imageUrl: '' }
  upDateState = async name => {
    let { result, subDetail, imageUrl } = await getData(name).then(res => res)
    this.setState({
      data: result,
      subDetail: subDetail,
      imageUrl: imageUrl,
    })
  }
  render = () => (
    <div>
      <Navbar UpDateState={this.upDateState} />
      <TopProfile image={this.state.imageUrl} />
      {renderData(this.state.data)}
    </div>
  )
}
