import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <body>
        {children}
      </body>
    </html>
  );
}
