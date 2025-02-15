import FilterForm from '@/app/(main-layout)/products/_component/FilterForm'
import ProductList from '@/app/(main-layout)/products/_component/ProductList'
import React from 'react'

interface SearchParams {
    status: string
    keyword: string
}
export default async function ProductPage({ searchParams }: { searchParams: SearchParams }) {
    const search = await searchParams
    const { status, keyword } = search
    console.log(search)
    return (
        <div>
            <h1>ProductPage</h1>
            <h2>Status: {status}</h2>
            <h2>Keyword: {keyword}</h2>
            <FilterForm />
            <ProductList />
        </div>
    )
}
