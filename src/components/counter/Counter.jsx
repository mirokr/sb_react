// import { render } from '@testing-library/react'
import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{
  constructor(){
    super();
    this.state={
      counter:0,    
    }
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }
  render(){ 
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
        <span className="count"
       // style={style}
        >{this.state.counter}</span>
        <div><button className="reset"  onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

    increment(by){
      //console.log(`increment from child - ${by}`)
      //update state-counter++
     // console.log('increment')
     // this.state.counter++;
      this.setState(
           (prevState)=> {
          return {counter: prevState.counter+by} 
           }
       );
      // this.props.incrementMethod(this.props.by );
    }
    decrement(by){
      this.setState(
           (prevState)=> {
          return {counter: prevState.counter-by} 
           }
       );
    }

    reset(){
      this.setState({counter:0});
    }
    
  }
class CounterButton extends Component {
  //Define initial sstate in constructor
  //state=>counter 0
  // constructor(){
  //   super();
  // //   this.state={
  // //     counter:0,
     
  // //   }
  // //  this.increment=this.increment.bind(this)
  // //  this.decrement=this.decrement.bind(this);
  // }
  //render=()=>{
    render(){
     // const style={fontSize : "50px",padding : "15px 30px"}
    return (
      <div className="counter">
        <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
       {/* <span className="count"
       // style={style}
    >{this.state.counter}</span>*/}
      
      </div>
    )}
  

  //increment=()=>{
  //   increment(){
  //   //update state-counter++
  //  // console.log('increment')
  //  // this.state.counter++;
  //   this.setState(
  //     (prevState)=>{
  //           return {counter:prevState.counter+this.props.by}   
  //         }
  //   );
  //   this.props.incrementMethod(this.props.by );
  // }
  // decrement(){
  //   this.setState(
  //     (prevState)=>{
  //           return {counter:prevState.counter-this.props.by}   
  //         }
  //   );
  //   this.props.decrementMethod(this.props.by );
  // }
}
CounterButton.defaultProps={
  by:1
}
CounterButton.propTypes={
  by:PropTypes.number
}
  export default Counter;