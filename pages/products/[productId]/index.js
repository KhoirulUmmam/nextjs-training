import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId
  return (
    <div>This is Product Detail {productId}</div>
  )
}
