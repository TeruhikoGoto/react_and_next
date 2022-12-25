import React, { useState, useEffect } from 'react'
import './App.css';

function AlertMessage(props) {
  return(
    <div className="alert alert-primary h5 text-primary">
      <h5>{props.msg}</h5>
    </div>
  )
}

function App() {
  // フィールドから入力された値のステートフック
  const [val, setVal] = useState(0)
  // 計算結果をセットするステートフック
  const [msg, setMsg] = useState("set a number...")

  const doChange = (event) => {
    setVal(event.target.value)
  }

  // 1からその数字までの合計を計算する
  // コンポーネントがマウントされたり表示が更新されたりした際は、副作用フックが実行されるという仕様になっているよう？
  useEffect(()=>{
    let total = 0
    for (let i = 0;i <= val;i++){
      total += i
    }
    setMsg("total: " + total + ".")
  })

  // 実験用。表示更新したらとりあえず実行されるっぽい。
  useEffect(()=>{
    console.log("test")
  })

  return(
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input type="number" className="form-control"
            onChange={doChange} />
        </div>
      </div>
    </div>
  )
}

export default App
