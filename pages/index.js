import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Paragraph from '../components/Paragraph'
import getData from '../libs/getData'
export default class extends Component {
  state = { name: '', data: [] }
  upDateState = async name => {
    let data = await getData(name)
    this.setState({ name, data })
  }
  render = () => (
    <div>
      <Navbar UpDateState={this.upDateState} />
      <Paragraph data={this.state.data} />
      <button>ice</button>
    </div>
  )
}
