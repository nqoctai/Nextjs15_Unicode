import { deleteTodo } from '@/app/(main-layout)/todos/action'
import Button from '@/app/(main-layout)/todos/delete/[id]/Button'
import React from 'react'

type Params = {
    params: Promise<{ id: string }>
}
export default async function DeletePage({ params }: Params) {
    const { id } = await params
    return (
        <form action={deleteTodo}>
            <h1>Delete Todo</h1>
            <p>Bạn có chắc chắn?</p>
            <button className='btn btn-primary'>OK</button>
            <Button />
            <input type="hidden" name='id' value={id} />
        </form>
    )
}
