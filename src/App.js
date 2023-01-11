import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    name : "Fred",
    open : false,
  }



  handleChangeName (){
      
      this.setState({
        name : "Ryan"
      })
  }

  handleOpenBox (){
    
    this.setState({
      open : !this.state.open
    })
  }





  render() {
    return <div>

        <nav className={this.state.open ? "" : "hide"}>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </nav>

        <h1>Hello {this.state.name}</h1>

          <button onClick={this.handleChangeName.bind(this)}>Change name</button>
           <br/>
          <button onClick={this.handleOpenBox.bind(this)}>View the box</button>
    </div>
  }
}

export default App;
