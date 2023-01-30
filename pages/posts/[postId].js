import React from 'react'

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()

  if(!data.id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /posts/${params.postId}`)

  return {
    props: {
      post: data
    }
  }
}

export async function getStaticPaths(){

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await res.json()

  // const paths = data.map((post) => {
  //   return{
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   }
  // })

  return {
    paths: [
      {
        params: { postId: '1' },  
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
      {
        params: { postId: '4' },
      },
      {
        params: { postId: '5' },
      },
    ],
    // paths,
    fallback: 'blocking',
  }
}

export default function DetailPost({ post }) {
  // const router = useRouter()

  // if(router.isFallback){
  //   return <h1>Loading...</h1>
  // }
  return (
    <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </>
  )
}
