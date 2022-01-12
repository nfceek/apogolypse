import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold text-center">Apogolypse Marketplace</p>
          <div className="flex-inline mt-4 text-center">
            <Link href="/">
              <a className="mr-4 text-orange-500">
                Home
              </a>
            </Link>
            <Link href="/create-item">
              <a className="mr-6 text-orange-500">
                Add Digital Asset
              </a>
            </Link>
            <Link href="/my-assets">
              <a className="mr-6 text-orange-500">
                Digital Assets
              </a>
            </Link>
            <Link href="/creator-dashboard">
              <a className="mr-6 text-orange-500">
                *Creator Dashboard
              </a>
            </Link>
          </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace