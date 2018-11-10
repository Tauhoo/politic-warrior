import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { runInThisContext } from 'vm'
export default class extends Component {
  state = { name: '' }
  upDateState = newState => {
    this.setState(newState)
  }
  render = () => (
    <div>
      <Navbar upDateState={this.upDateState} />
      <button>ice</button>
    </div>
  )
}
