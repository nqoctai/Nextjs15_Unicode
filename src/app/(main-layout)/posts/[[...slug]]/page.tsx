import PostDetail from '@/app/(main-layout)/posts/_component/PostDetail';
import PostList from '@/app/(main-layout)/posts/_component/PostList';
import React from 'react'

export default async function PostDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    return slug ? <PostDetail post={slug[0]} /> : <PostList />;
}
