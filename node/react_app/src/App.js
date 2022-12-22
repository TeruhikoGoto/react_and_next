import React, {Component} from 'react'
import './App.css';

class App extends Component {
  input = ''

  constructor(props){
    super(props)
    console.log(this)
    this.state = {
      title: 'input form',
      message: 'type your name',
    }
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  // フォームの入力があった時に実行される
  doChange(event) {
    console.log(this)
    this.input = event.target.value;
  }

  // ボタンがクリックされた時に実行される。
  doSubmit(event) {
    console.log(this)
    this.setState({
      title: 'send form',
      message: 'Hello, ' + this.input + '!!'
    })
    event.preventDefault()
  }

  render(){
    console.log(this)
    return(
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <p className="card h5 p-3">{this.state.message}</p>
          <div className="alert alert-primary mt-3">
            <form onSubmit={this.doSubmit}>
              <div className="form-group">
                <label>Message:</label>
                <input type="text" className="form-control"
                  onChange={this.doChange}
                  required pattern="[A-Za-z _,>]+" />
              </div>
              <input type="submit" className="btn btn-primary"
                value="Click" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
