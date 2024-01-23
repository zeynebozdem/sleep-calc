import Head from "next/head";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Sleep Calc.</title>
          <link rel="icon" href="/appicon.svg" />
        </head>
        <body className="app-body">{children}</body>
      </html>
    )
  }