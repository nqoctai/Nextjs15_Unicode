"use client"
import { handleRegister } from '@/app/(main-layout)/auth/action'
import React from 'react'
import { useActionState } from 'react'

const initialState = {
    message: '',
    success: false,
    errors: {}
}
export default function Form() {
    const [state, formAction, pending] = useActionState(handleRegister, initialState)
    console.log(state)

    return (
        <div>
            <form action={formAction}>
                {state.message && <div className={`alert ${state.success ? 'alert-success' : 'alert-danger'}`}>
                    {state.message}
                </div>}
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>
                        Name
                    </label>
                    <input id='name' type="text" className='form-control' name='name' placeholder='Name...' />
                    {state.errors?.name && <span className='text-danger'>{state.errors?.name[0]}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>
                        Email
                    </label>
                    <input id='email' type="text" className='form-control' name='email' placeholder='Email...' />
                    {state.errors?.email && <span className='text-danger'>{state.errors?.email[0]}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor="password" className='form-label'>
                        Password
                    </label>
                    <input id='password' type="text" className='form-control' name='password' placeholder='Password...' />
                    {state.errors?.password && <span className='text-danger'>{state.errors?.password[0]}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor="confirm_password" className='form-label'>
                        Confirm Password
                    </label>
                    <input id='confirm_password' type="text" className='form-control' name='confirm_password' placeholder='Confirm Password...' />
                    {state.errors?.confirm_password && <span className='text-danger'>{state.errors?.confirm_password[0]}</span>}

                </div>
                <div className="d-grid">
                    <button type='submit' className='btn btn-primary' disabled={pending}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}
