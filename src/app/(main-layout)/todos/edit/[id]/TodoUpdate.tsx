"use client"
import { update } from '@/app/(main-layout)/todos/action';
import { Todo } from '@/app/(main-layout)/todos/page'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function TodoUpdate({ todo }: { todo: Todo }) {
    const [msg, setMsg] = useState<string>('')
    const router = useRouter()
    return (
        <form action={async (formData) => {
            formData.append('id', todo.id)
            const response: { success: boolean; message: string | undefined } = await update(formData);
            if (!response.success) {
                setMsg(response.message as string)
            } else {
                router.push('/todos')
            }
            console.log(response)
        }}>
            <input type="text" name='title' placeholder='Title' className='form-control' defaultValue={todo.title} />
            <input type="text" name='content' placeholder='Content' className='form-control' defaultValue={todo.content} />
            <label className='d-block'>
                <input type="checkbox" defaultChecked={todo.completed} name='completed' />
                Completed
            </label>
            <button type='submit'>Update</button>
            {msg && <span className='text-danger d-block'>{msg}</span>}
        </form>
    )
}
