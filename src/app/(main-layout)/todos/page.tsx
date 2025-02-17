import SearchForm from '@/app/(main-layout)/todos/_components/SearchForm'
import TodoAdd2 from '@/app/(main-layout)/todos/_components/TodoAdd2'
import TodoApp from '@/app/(main-layout)/todos/_components/TodoApp'
import Link from 'next/link'
import React from 'react'

const getTodoList = async (q: string = "") => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos?q=${q}`,
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

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    content: string;
}
export default async function TodosPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const q = (await searchParams).q || ""
    const todoList = await getTodoList(q)

    return (
        <div>
            <h1>To do list: {q}</h1>
            <SearchForm />
            {
                todoList.map((todo: Todo) =>
                    <Link key={todo.id} href={`/todos/${todo.id}`}>
                        <h3>
                            {todo.title} <button>Edit</button>
                        </h3>
                    </Link>

                )
            }
            {/* <TodoApp /> */}
            <TodoAdd2 />
        </div>
    )
}
