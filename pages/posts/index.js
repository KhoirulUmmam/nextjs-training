import React from 'react'
import Head from 'next/head'

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return {
        props:{
            posts: data,
        }
    }
}

export default function Posts({ posts }) {
  return (
    <>
        <Head>
            <title>Shiro Store | Post</title>
        </Head>
        <div>
            <h2>This is Post Page</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt, voluptate et sapiente aspernatur nisi similique voluptatem labore harum quis a ipsa, ut vel quas cupiditate consequatur sed itaque tenetur!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptate saepe facilis laboriosam consequatur omnis exercitationem rerum culpa assumenda, qui sequi. Earum illum ipsa voluptas atque assumenda laboriosam magni eaque?</p>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>
                )
            })}
        </div>
       
    </>
  )
}
