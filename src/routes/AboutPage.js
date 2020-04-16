import React from 'react'
import { connect } from 'dva'
import Ui from '../components/About'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.handlePop = this.handlePop.bind(this)
  }
  handlePop() {
    console.log('father handle', this.props)
  }
  render() {
    return (
      <>
        <Ui onPop={this.handlePop}/>
      </>
    )
  }
}


export default connect(state => ({
  ...state
}))(Page)
