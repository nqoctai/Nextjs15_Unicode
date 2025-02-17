"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
export type Posts = {
    id: string;
    title: string;
    content: string;
}

export default function PostList() {
    const [postList, setPostList] = useState<Posts[]>([])
    const [error, setError] = useState<Error>(null as unknown as Error)
    const getPosts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts`)
            if (!response.ok) {
                throw new Error("Failed to fetch post list")
            }
            const data = await response.json()
            setPostList(data)
        } catch (error: unknown) {
            setError(error as Error)
        }


    }
    useEffect(() => {
        getPosts()
    }, [postList])
    if (error) {
        return <h3>{error.message}</h3>
    }
    return (
        <div>
            <h1>PostList</h1>
            {
                postList.map((post: Posts) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}> <h3>{post.title}</h3></Link>

                        <p>{post.content}</p>
                    </div>
                ))
            }
        </div>
    )
}
