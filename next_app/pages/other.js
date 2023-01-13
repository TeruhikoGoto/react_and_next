import Header from './header'
import Link from 'next/link'

export default function Other() {
  const title = "Other"

  return (
    <div>
      <Header title={title}></Header>
      <h1 className="bg-primary px-3 text-white display-4">React</h1>
      <div className="container">
        <h3 className="my-3 text-primary text-center">
          {title}
        </h3>
        <div className="card p-3">
          <p>これは、もう1つのページの表示です。</p>
          <Link href="/">
            &lt;&lt; Back to Index page
          </Link>
        </div>
      </div>
    </div>
  )
}
