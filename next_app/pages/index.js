import Layout from '../components/layout'
import useSWR from 'swr'

export default function Home() {
  // テキストの形で返すfetchの即時関数
  // なんで...argsが'/data.txt'だと判別できてる？
  const func = (...args) => fetch(...args).then(res => res.text())
  const { data, err } = useSWR('/data.txt', func)

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            { data }
          </h5>
        </div>
      </Layout>
    </div>
  )
}
