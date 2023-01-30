import React from 'react'
import Head from 'next/head'
import User from '@/components/Users/Users'
import Link from 'next/link'

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}

export default function UserList({ users }) {
  return (
    <>
        <Head>
            <title>Shiro Store | User</title>
        </Head>
        <div>
            <h2>This is List of Users</h2>
        {users.map((user) => {
            return (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`} passHref>
                        {/* <User user={user}/> */}
                        <p>{user.id} {user.name}</p>
                    </Link>
                    <hr />
                </div>
            )
        })}
        </div>
    </>
  )
}
