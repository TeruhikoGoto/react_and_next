import Layout from '../components/layout'
import useSWR from 'swr'

export default function Home() {
  const fetcher = url => fetch(url).then(r => r.json())
  const { data } = useSWR('/data.json', fetcher)

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            { data != undefined ? data.message : 'error...' }
          </h5>
          <table className="table table-dark">
            <thead className="">
              <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
            </thead>
            <tbody>
              {data != undefined ? data.data.map((value, key) => (
                <tr key={key}>
                  <th>{value.name}</th>
                  <th>{value.mail}</th>
                  <th>{value.age}</th>
                </tr>
              )) : <tr><th></th><td>err</td><td></td></tr>}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  )
}
