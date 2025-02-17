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

                    <h3 key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>
                            {todo.title}
                        </Link>
                        <Link className='fs-6 float-end ms-2' href={`/todos/delete/${todo.id}`}>
                            Delete
                        </Link>
                        <Link className='fs-6 float-end' href={`/todos/edit/${todo.id}`}>
                            Edit
                        </Link>

                    </h3>


                )
            }
            {/* <TodoApp /> */}
            <TodoAdd2 />
        </div >
    )
}
