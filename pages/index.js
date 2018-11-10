import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Paragraph from '../components/Paragraph'
export default class extends Component {
  state = { name: '' }
  upDateState = newState => {
    this.setState(newState)
  }
  render = () => (
    <div>
      <Navbar upDateState={this.upDateState} />
      <Paragraph />
      <button>ice</button>
    </div>
  )
}
