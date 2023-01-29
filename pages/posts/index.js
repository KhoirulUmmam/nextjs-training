import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return {
        props:{
            posts: data
        }
    }
}

export default function PostList({ posts }) {
  return (
    <>
        <Head>
            <title>Shiro Store | Post</title>
        </Head>
        <div>
            <h2>This is Post Page</h2>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </div>
       
    </>
  )
}
