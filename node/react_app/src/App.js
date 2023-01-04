import React, { useState } from 'react'
import './App.css';

// 合計計算の関数
const total = (a)=> {
  let re = 0
  for(let i = 0;i <= a;i++) {
    re += i
  }
  return re
}

// 消費税計算の関数
const tax = (a)=> {
  return Math.floor(a * 1.1)
}

// 数値を計算し、メッセージを返す独自フック関数
function useCalc(num=0, func = (a)=>{return a}, agenda) {
  const [msg, setMsg] = useState(null)

  const setValue = (p)=> {
    let res = func(p)
    setMsg(<p className="h5">※ {p} の{agenda}結果は、{res} です。</p>)
  }

  return [msg, setValue]
}

// 入力された数字をそのまま返すコンポーネント
function PlainMessage(props) {
  const [msg, setCalc] = useCalc("そのままの")

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return(
    <div className="p-3 h5">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange}
        className="form-control" />
    </div>
  )
}

// 合計計算コンポーネント
function AlertMessage(props) {
  const [msg, setCalc] = useCalc(0, total, "合計値の")

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return(
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange}
        min="0" max="10000" className="form-control" />
    </div>
  )
}

// 消費税計算コンポーネント
function CardMessage(props) {
  const [msg, setCalc] = useCalc(0, tax, "消費税の")

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return(
    <div className="card p-3 h5 border-primary">
      <h5>{msg}</h5>
      <input type="range" onChange={onChange}
        min="0" max="10000" step="100" className="form-control" />
    </div>
  )
}

// ベース・コンポーネント
function App() {
  return(
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  )
}

export default App
