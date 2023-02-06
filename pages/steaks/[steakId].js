import React from 'react'
import { useRouter } from 'next/router'

export async function getStaticProps(context){
    const { params } = context
    const res = await fetch(`http://localhost:4000/steaks/${params.steakId}`)
    const data = await res.json()

    return {
      props: {
        steak: data
      }
    }
}

export async function getStaticPaths(){
  return{
    paths:[
      {
        params: { steakId: '1'}
      }
    ],
    fallback: true
  }
}

export default function SteaksDetail({ steak }) {
  const router = useRouter()

  if(router.isFallback){
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h2>
        {steak.id} {steak.title} {steak.price}
      </h2>
      <p>
        {steak.description}
      </p>
      <hr />
    </div>
  )
}
