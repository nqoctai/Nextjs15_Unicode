import React from 'react'


interface PageProps {
    params: {
        slug: string
    };
}
export default async function ProductDetailPage(props: PageProps) {
    const { params } = props;
    const { slug } = await params;
    const result = slug.match(/[0-9]+$/i);
    const productId = result ? parseInt(result[0]) : null;
    console.log(result);
    return (
        <div>
            <h1>Chi tiet san pham</h1>
            <h2>ID: {productId}</h2>
        </div>
    )
}
