import Layout from '../components/layout'
import MyImage from '../components/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">Welcome to next.js!</h5>
          <MyImage fname="image.png" size="300"></MyImage>
        </div>
      </Layout>
    </div>
  )
}
