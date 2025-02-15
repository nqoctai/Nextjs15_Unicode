import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="mdl-js">
            <body >
                <div className='admin-layout'>
                    {children}
                </div>

            </body>
        </html>
    );
}
