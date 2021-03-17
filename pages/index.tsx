import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
