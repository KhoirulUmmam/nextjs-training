import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='not-found'>
        <h1>Sorry... </h1>
        <h2>Page not NotFound.</h2>
        <p>Go back to the <Link href="/" className='btn-404'>Homepage</Link></p>
    </div>
  )
}
