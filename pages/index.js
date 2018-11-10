import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Paragraph from '../components/Paragraph'
export default class extends Component {
  state = { name: '' }
  upDateState = newState => {
    console.log('ice')
    this.setState(newState)
  }
  render = () => (
    <div>
      <Navbar UpDateState={this.upDateState} />
      <Paragraph />
      <button>ice</button>
    </div>
  )
}
