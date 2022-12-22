import React, {Component} from 'react'
import './App.css';

class App extends Component {
  input = ''

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Message title="Children!">
            これはコンポーネント内のコンテンツです。
            まるでテキストを分割し、リストにして表示します。
            改行は必要ありません。
          </Message>
        </div>
      </div>
    )
  }
}

class Message extends Component {
  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
  }

  render(){
    let content = this.props.children
    let arr = content.split('。')
    let arr2 = [];
    // trim(): 文字列の両端の空白を除去する。
    // 行がblankじゃなければ、arr2にpushする。
    for(let i = 0;i < arr.length;i++){
      if (arr[i].trim() !== ''){
        arr2.push(arr[i]);
      }
    }
    // list: liの集合。
    let list = arr2.map( (value, key)=>(
      <li className="list-group-item" style={this.li}
        key={key}>{key + 1}. {value} .</li>)
    )
    return(
      <div>
        <h2>{this.props.title}</h2>
        <ol className="list-group">{list}</ol>
      </div>
    )
  }
}

export default App;
