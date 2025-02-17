"use client"
import { create } from '@/app/(main-layout)/todos/action';
import { Span } from 'next/dist/trace';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

export default function TodoAdd2() {
    const [msg, setMsg] = useState<string>('')
    return (
        <div>
            <form action={async (formData) => {
                const response: { success: boolean; message: string | undefined } = await create(formData);
                if (!response.success) {
                    setMsg(response.message as string)

                }
                console.log(response)
            }}>
                <input type="text" name='title' placeholder='Title' className='form-control' />
                <input type="text" name='content' placeholder='Content' className='form-control' />
                <button type='submit'>Add</button>
                {msg && <span className='text-danger d-block'>{msg}</span>}
            </form>
        </div>
    )
}
