import React from 'react'
import Link from 'next/link'

export async function getStaticProps(){
    const res = await fetch('http://localhost:4000/steaks')
    const data = await res.json()

    return {
        props: {
            steaks: data
        }
    }
}

export default function SteakList({ steaks }) {
  return (
    <div>
        <h1>List of Steaks</h1>
        {steaks.map((steak) => {
            return (
                <div key={steak.id}>
                    <Link href={`/steaks/${steak.id}`} passHref>
                    <h2>
                        {steak.id} {steak.title} {steak.price}
                    </h2>
                    </Link>
                    <hr />
                </div>
            )
        })}
    </div>

  )
}
