import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Paragraph from '../components/Paragraph'
import getData from '../libs/getData'

const renderData = data => data.map(paragraph => <Paragraph data={paragraph} />)
export default class extends Component {
  state = { name: '', data: [], subDetail: {}, imageUrl: '' }
  upDateState = async name => {
    let data = await getData(name)
    console.log(data)
    this.setState({ name, ...data })
  }
  render = () => (
    <div>
      <Navbar UpDateState={this.upDateState} />
      {renderData(this.state.data)}
    </div>
  )
}
