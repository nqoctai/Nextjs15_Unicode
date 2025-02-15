import React from 'react'

export default function PostDetail({ category, post }: { category: string, post: string }) {
    return (
        <div>
            <h1>PostDetailPage</h1>
            <h2>Category: {category}</h2>
            <h2>Post : {post}</h2>
        </div>
    )
}
