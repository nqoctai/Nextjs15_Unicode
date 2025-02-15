"use client"
import React, { useState } from 'react'

export default function Button() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <div>
            <button onClick={handleClick}>Click me {clicked ? "clicked" : ""}</button>
        </div>
    )
}
