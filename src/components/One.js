import React, {Component} from 'react'
import styled from 'styled-components'
import start from '../img/start.png'

class One extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    return (<Wrap>
      <Start alt='' src={start} onClick={this.props.next}/>
  </Wrap>)
  }
}
export default One


const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Start = styled.img`
&:hover{
  cursor: pointer;
}
`