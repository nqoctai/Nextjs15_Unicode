import { redirect } from 'next/navigation';
import React from 'react'

export default function OrdersPage() {
    const isLogin = true;
    if (!isLogin) {
        redirect("/products")
    }
    return (
        <div>
            <h1>OrderPage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic unde, iste repudiandae, nemo ipsum deserunt expedita minus maxime quidem aliquid odio eum. Temporibus dolor, provident ex neque dignissimos ut!</p>

        </div>
    )
}
