
import './App.css';
import './bootstrapp.css'
import  React, { Component } from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
import TodoApp from './components/todo/TodoApp'


class App extends Component {
  render(){ 
  return (
    <div className="App">
      {/*<Counter/>*/}
      <TodoApp/>
    </div>
  );}
  }

// class LearningComponents extends Component{
//   render(){ 
//     return(
//     <div className="LearningComponents">
//       My Hello World
//        <FirstComponent></FirstComponent>
//       <SecondComponent></SecondComponent>
//       <ThirdComponent></ThirdComponent>
//     </div>
//   );}
// }





export default App;
