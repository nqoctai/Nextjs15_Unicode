"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Button() {
    const router = useRouter()
    return (
        <button className='btn btn-danger' type='button' onClick={() => router.push(`/todos`)}>Cancel</button>
    )
}
