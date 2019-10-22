import React, {Component} from 'react'
import styled from 'styled-components'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import { ONE, TWO, THREE, FOUR, FIVE } from './constants'
import start from './img/background.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewState: FOUR,
      background: ''
    }
  }
  render(){
    const { viewState } = this.state
    return (
    <Wrap>
    {viewState === 'ONE' ? <One 
    next={() => this.setState({viewState: TWO})}/> : 
    viewState === 'TWO' ? <Two 
    next={() => this.setState({viewState: THREE})}
    prev={() => this.setState({viewState: ONE})}
    setBackground={(num) => this.setState({background: num})}/> : 
    viewState === 'THREE' ? <Three 
    next={() => this.setState({viewState: FOUR})}
    prev={() => this.setState({viewState: TWO})}
    setBackground={(num) => this.setState({background: num})}/> : 
    viewState === 'FOUR' ? <Four 
    background={this.state.background}/> :
    viewState === 'FIVE' ? <Five 
    background={this.state.background}/> : null }
  </Wrap>)
  }
}
export default App


const Wrap = styled.div`
  background-image: url(${start});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`