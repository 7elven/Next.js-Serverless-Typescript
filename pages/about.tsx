import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <a>About Us</a>
      </li>
    </ul>
  )
}

export default Home
