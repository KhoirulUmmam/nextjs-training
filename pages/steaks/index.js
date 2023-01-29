// export const getStaticProps = async () => {

//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json();

//     return {
//         props: { steaks: data}
//     }
// }

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products')
    const steaks = await res.json()

    return {
        props: {
            steaks,
        }
    }
}
export default function Steak({steaks}) {
    return (
      <div>
          <h1>All of Steaks</h1>
          {steaks.map(steak => {
              <div key={steak.id}>
                  <h3>{steak.title}</h3>
              </div>
        })}
      </div>
    )
  }



