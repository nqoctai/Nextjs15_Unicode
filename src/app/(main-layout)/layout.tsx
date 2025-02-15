import Menu from '@/app/(main-layout)/_component/Menu';
import Link from 'next/link';
import React from 'react'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className='container py-3 main-layout'>
            <div className='row'>
                <div className='col-3'>
                    <Menu />
                </div>
                <div className="col-9">
                    {children}
                </div>
            </div>
        </div>
    )
}
