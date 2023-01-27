import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
  
  const router = useRouter();

  useEffect(() => {
    // console.log('testing not found')
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, []);
  
  return (
    <div className='not-found'>
        <h1>Sorry... </h1>
        <h2>Page not NotFound.</h2>
        <p>Go back to the <Link href="/" className='btn-404'>Homepage</Link></p>
    </div>
  )
}
