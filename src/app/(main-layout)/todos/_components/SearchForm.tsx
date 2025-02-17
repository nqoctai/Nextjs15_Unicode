"use client"
import { debounce } from '@/app/(main-layout)/utils/debounce';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import React from 'react'

export default function SearchForm() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        router.push(`${pathname}?q=${keyword}`)
        console.log(keyword)
    })
    return (
        <input type='search' placeholder='Search...' onChange={handleSearch} defaultValue={searchParams.get("q") ?? ""} />
    )
}
