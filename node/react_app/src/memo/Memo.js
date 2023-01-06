import React, { useState, useEffect } from 'react'
import usePersist from '../Persist'

import Item from './Item'

function Memo(props) {
  // localstorageから、データの取り出し？
  const [memo, setMemo] = usePersist("memo", [])
  const [fmemo, setFMemo] = usePersist("findMemo", [])
  const [mode, setMode] = usePersist('mode', 'default')

  console.log(memo)

  let data = []

  // デフォルトの一覧と、検索された時の一覧とで表示を出し分ける必要があるので、switchを使っている。
  switch (mode){
    case 'default':
      data = memo.map((value, key)=>(
        <Item key={value.message} value={value} index={key + 1} />
      ))
      console.log(memo)
      break

    case 'find':
      data = fmemo.map((value,key)=>(
        <Item key={value.message} value={value} index={key + 1} />
      ))
      break

    default:
      data = memo.map((value,key)=>(
        <Item key={value.message} value={value} index={key + 1} />
      ))
  }

  return (
    <table className="table mt-4">
      <tbody>{data}</tbody>
    </table>
  )
}

export default Memo
