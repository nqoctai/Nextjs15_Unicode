"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Button() {
    const router = useRouter();
    const handleNavigate = () => {
        router.push('/products')
    }
    return (
        <button onClick={handleNavigate}>Go Products</button>
    )
}
