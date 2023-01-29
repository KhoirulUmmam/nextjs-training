import React from 'react'
import Head from 'next/head'

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    return {
        props: {
            users,
        }
    }
}

export default function User({ users }) {
  return (
    <>
        <Head>
                <title>Shiro Store | User</title>
        </Head>
        <div>This is List of Users</div>
        {users.map((user) => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })}
    </>
  )
}
