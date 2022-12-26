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
  const [val, setVal] = useState(1000)
  const [tax1, setTax1] = useState(0)
  const [tax2, setTax2] = useState(0)
  // 計算結果をセットするステートフック
  const [msg, setMsg] = useState(<p>set a price...</p>)

  const doChange = (event) => {
    setVal(event.target.value)
  }

  useEffect(() => {
    let res = (
      <div>
        <p>軽減税率(8%) : {tax1} 円</p>
        <p>軽減税率(10%) : {tax2} 円</p>
      </div>
    )
    setMsg(res)
  // 第二引数に指定したステートが更新されたときは、この副作用フックを再度呼び出すことが許可される。それ以外の場合は、再度呼び出されない（スキップされる）。
  }, [tax1, tax2])

  useEffect(()=>{
    setTax1(Math.floor(val * 1.08))
  })

  useEffect(()=>{
    setTax2(Math.floor(val * 1.1))
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
