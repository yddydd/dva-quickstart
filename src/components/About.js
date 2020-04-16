import React from 'react'

export default class About extends React.Component {
  render() {
    return (
      <>
        <h1>我就是ui component</h1>
        <button onClick={this.props.onPop}>pop</button>
      </>
    )
  }
}