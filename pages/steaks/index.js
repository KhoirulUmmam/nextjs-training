// export const getStaticProps = async () => {

//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json();

//     return {
//         props: { steaks: data}
//     }
// }

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)

    return  {
        props: {
            users: data
        },
    }
}
export default function Steak({ users }) {
    return (
      <div>
          <h1>All of Steaks</h1>
          {users.map((user) => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div> 
            )
        })}     
      </div>
    )
}



