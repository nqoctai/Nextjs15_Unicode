import { Todo } from '@/app/(main-layout)/todos/page';
import Link from 'next/link';
import React from 'react'

type Params = {
    params: {
        id: string;
    }
}

const getTodo = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`)
    return response.json()
}

export default async function TodoDetailPage({ params }: Params) {
    const { id } = await params;
    const todo: Todo = await getTodo(id)
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
            <p>{todo.completed.toString()}</p>
            <h4><Link href="/todos">Back</Link></h4>
        </div>
    )
}
