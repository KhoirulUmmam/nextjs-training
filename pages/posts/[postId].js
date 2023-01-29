import React from 'react'

export async function getStaticProps(context){
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = res.json()

    return {
        props: {
            post: data.slice(0, 3)
        }
    }
}

export default function Post({ post }) {
  return (
    <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </>
  )
}
