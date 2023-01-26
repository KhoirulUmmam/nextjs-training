// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    { 
      data : [
        {
            "id" : 1,
            "name" : "Sirloin",
            "description" : "Sirloin adalah potongan daging yang berasal dari punggung sapi. Potongan daging yang satu ini memiliki tekstur yang lebih alot dibandingkan tenderloin. Pasalnya, sirloin mempunyai lemak lebih sedikit dibandingkan tenderloin."
        },
        {
            "id" : 2,
            "name" : "Tenderloin",
            "description" : "Tenderloin adalah daging dari bagian tengah badan sapi. Karena teksturnya yang sangat lembut dan empuk, tenderloin cocok dijadikan bahan baku steak. Daging sirloin berasal dari bagian bawah daging iga hingga bagian luar dari tenderloin. Sirloin juga dikenal sebagai bagian daging sapi yang sering diolah menjadi steak."
        },
        {
            "id" : 3,
            "name" : "Tomahawk",
            "description" : "Daging Tomahawk adalah potongan ribeye daging sapi yang memiliki tulang rusuk yg diambil dari bagian Rib-tulang di atas, dipotong dari tulang rusuk depan dengan tulang rusuknya yang tersisa."
        }
      ]
    }
  )
}
