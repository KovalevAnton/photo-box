import React, {Component} from 'react'
import styled from 'styled-components'
import next from '../img/next.png'
import prev from '../img/prev.png'
import postcard_1 from '../img/postcard_1.jpg'
import postcard_2 from '../img/postcard_2.jpg'
import postcard_3 from '../img/postcard_3.jpg'

class Two extends Component {
  constructor(props) {
    super(props)
    this.state = {
        bg: '1'
    }
  }
  render(){
    return (<Wrap>
      <WrapBackground> 
        <Background active={this.state.bg === '1'} alt='' src={postcard_1} onClick={() => this.setState({bg: '1'})}/>
        <Background active={this.state.bg === '2'} alt='' src={postcard_2} onClick={() => this.setState({bg: '2'})}/>
        <Background active={this.state.bg === "3"} alt='' src={postcard_3} onClick={() => this.setState({bg: '3'})}/>
      </WrapBackground>
      <WrapButtons>
        <Button alt='' src={prev} onClick={() => this.props.prev()}/>  
        <Button alt='' src={next} onClick={() => {
            this.props.setBackground(this.state.bg)
            this.props.next()
        }}/>  
      </WrapButtons>
  </Wrap>)
  }
}
export default Two

const Background = styled.img`
width: 30%;
border: ${props => props.active ? '10px solid #000' : 'none'}
align-items: space-around;
margin: 20px;
display: flex;
&:hover{
    cursor: pointer;
}
`
const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`
const WrapBackground = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`
const Button = styled.img``

const WrapButtons = styled.div`
display: flex;
justify-content: flex-end;
align-items: space-between;
`