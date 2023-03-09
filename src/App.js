import React, { Component } from 'react'

export default class Parent extends Component {
  doSomething = () => {
    console.log('Parent clicked')
  }
  render() {
    return (
      <div>
        <Child 
        name='First child'
        age='12'
        hobby='chilling'
        />
        <Child 
        name='Second child'
        age='20'
        hobby='diving'
        />
        <Child 
        name='Thirth child'
        age='23'
        hobby='coding'
        />
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return (
      <div className='child'>
        <h1>{this.props.name}</h1>
        <h3>{this.props.age}</h3>
        <p>{this.props.hobby}</p>
      </div>
    )
  }
}
