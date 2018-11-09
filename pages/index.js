import React, { Component } from 'react'
import getData from '../libs/getData'
export default class extends Component {
  click = () => {
    getData('ทักษิณ ชินวัตร').then(res => {
      console.log(res)
    })
  }
  render = () => (
    <div>
      <button onClick={this.click}>ice</button>
    </div>
  )
}
