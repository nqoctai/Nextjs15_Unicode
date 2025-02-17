"use client"
import { create } from '@/app/(main-layout)/todos/action';
import { Span } from 'next/dist/trace';
import { redirect } from 'next/navigation';
import React, { useState, useActionState } from 'react'
const initialState = {
    message: "",
    success: false
}
export default function TodoAdd2() {
    const [msg, setMsg] = useState<string>('')
    const [state, formAction] = useActionState(create, initialState)
    console.log(state)
    return (
        <div>
            <form
                // action={async (formData) => {
                //     const response: { success: boolean; message: string | undefined } = await create(formData);
                //     if (!response.success) {
                //         setMsg(response.message as string)

                //     }
                //     console.log(response)
                // }}
                action={formAction}
            >
                <input type="text" name='title' placeholder='Title' className='form-control' />
                <input type="text" name='content' placeholder='Content' className='form-control' />
                <button type='submit'>Add</button>
                {state.message && <span className='text-danger d-block'>{state.message}</span>}
            </form>
        </div>
    )
}
