"use client"
import { Posts } from '@/app/(main-layout)/posts/_component/PostList'
import NotFound from '@/app/not-found'
import React, { useEffect, useState } from 'react'

export default function PostDetail({ post: postId }: { post: string }) {
    const [post, setPost] = useState<Posts>({} as Posts)
    const [error, setError] = useState<Error>(null as unknown as Error)

    const getPost = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts/${postId}`)
            if (!response.ok) {
                throw new Error("Failed to fetch post list")
            }
            const data = await response.json()
            setPost(data)
        } catch (error: unknown) {
            setError(error as Error)
        }
    }
    useEffect(() => {
        getPost()
    }, [postId])
    if (error) {
        return <NotFound />
    }


    return (
        <div>
            <h1>{post.title}</h1>
            <h2> {post.content}</h2>
        </div>
    )
}
