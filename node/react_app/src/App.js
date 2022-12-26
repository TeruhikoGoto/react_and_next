import React, { useState, useEffect } from 'react'
import './App.css';

// 数字を保管するステートと、数字に1カウントする関数を備える独自フック。
function useCounter() {
  const [num, setNum] = useState(0)

  const count = ()=>{
    setNum(num + 1)
  }

  return [num, count]
}

function AlertMessage(props) {
  // 独自フックを呼び出すときはこの形。
  const [counter, plus] = useCounter()
  return(
    <div className="alert alert-primary h5 text-center">
      <h4>count: {counter} .</h4>
      <button onClick={plus} className="btn btn-primary">count</button>
    </div>
  )
}

function App() {
  return(
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  )
}

export default App
