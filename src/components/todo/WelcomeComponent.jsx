import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.state={
            welcomeMessage:''
        }
        this.handleSSuccessfulRespons=this.handleSSuccessfulRespons.bind(this)
        this.handleError=this.handleError.bind(this)
    }
    render(){
        return (
            <>
            <h1>Welcome!</h1>
             <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>.               
              </div>
              <div className="container">
                    Click here to get customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} 
                    className="btn btn-success">Get welcome message.</button>           
              </div>
              <div className="container">
                    {this.state.welcomeMessage}
              </div>
            </>
             )
    }

        retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response=>this.handleSSuccessfulRespons(response))
        //    .catch()

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response=>this.handleSSuccessfulRespons(response))
        // }
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response=>this.handleSSuccessfulRespons(response))
        .catch(error=>this.handleError(error))
        }

        handleSSuccessfulRespons(response){
            console.log(response)
            this.setState({ welcomeMessage:response.data.message})
        
        }
        handleError(error){
            console.log(error.response.data.message)
            this.setState({ welcomeMessage:error.response.data.message})
        
        }
}
export default WelcomeComponent
