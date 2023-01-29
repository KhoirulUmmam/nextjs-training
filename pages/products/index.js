import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Product({productId = 100}) {
  return (
    <>
      <Head>
        <title>Shiro Store | Products</title>
      </Head>
       <div className='pt-6 p-8'>
        <h2>This is Product Page</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt, voluptate et sapiente aspernatur nisi similique voluptatem labore harum quis a ipsa, ut vel quas cupiditate consequatur sed itaque tenetur!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptate saepe facilis laboriosam consequatur omnis exercitationem rerum culpa assumenda, qui sequi. Earum illum ipsa voluptas atque assumenda laboriosam magni eaque?</p>
        <p><Link href={`/products/${productId}`}>Product {productId}</Link></p>
      </div>
    </>
  )
}
