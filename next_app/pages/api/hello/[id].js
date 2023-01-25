import apidata from '../../../components/data'

export default function handler(req, res) {
  const id = req.query.id

  res.json(apidata[id])
}
