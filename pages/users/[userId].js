import React from 'react'

export async function getStaticProps(context){
    const { params } = context
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.userId}`
    )
    const data = await res.json()

    return {
        props: {
            user: data
        }
    }
}

export async function getStaticPaths(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((user) => {
        return {
            params: {
                userId: `${user.id}`,
            },
        }
    })

    return {
    paths,
    fallback: false,
    }
  }

export default function DetailUser({ user }) {
    return (
    <>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address['city']}</p>
    </>
    )
  }
