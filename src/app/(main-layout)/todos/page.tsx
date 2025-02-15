import TodoApp from '@/app/(main-layout)/todos/_components/TodoApp'
import Link from 'next/link'
import React from 'react'

const getTodoList = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos`)
    return response.json()
}

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    content: string;
}
export default async function TodosPage() {
    const todoList = await getTodoList()
    return (
        <div>
            <h1>To do list</h1>
            {
                todoList.map((todo: Todo) =>
                    <Link key={todo.id} href={`/todos/${todo.id}`}>
                        <h3>{todo.title}</h3>
                    </Link>

                )
            }
            <TodoApp />
        </div>
    )
}
