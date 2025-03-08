import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Apple Macbook Pro",
  description: "Apple macbook pro website",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen w-full bg-black ">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className="h-screen w-full ">
        {children}
      </body>
    </html>
  );
};

