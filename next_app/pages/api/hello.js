// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import apidata from '../../components/data'

export default function handler(req, res) {
  // リクエストパラメータ
  let id = req.query.id
  if (id == undefined) { id = 0 }
  if (id >= apidata.length) { id = 0 }

  res.json(apidata[id])
}
