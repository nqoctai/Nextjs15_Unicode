import TodoUpdate from '@/app/(main-layout)/todos/edit/[id]/TodoUpdate';
import React from 'react'

type Params = {
    params: Promise<{ id: string }>
}
export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    content: string;
}
const getTodo = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`,
        {
            next: {
                tags: ['todos']
            }
        }
    )
    if (!response.ok) {
        throw new Error("Failed to fetch todo list")
    }
    return response.json()
}
export default async function TodoEditPage({ params }: Params) {
    const { id } = await params
    const todo: Todo = await getTodo(id)
    return (
        <div>
            <h1>Edit Todo</h1>
            <TodoUpdate todo={todo} />
        </div>
    )
}
