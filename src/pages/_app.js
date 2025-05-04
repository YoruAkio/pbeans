import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className}`}>
      <Component {...pageProps} />
    </main>
  )
}

// import "@/styles/globals.css";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <div className={`${geistSans.variable} ${geistMono.variable}`}>
//       <Component {...pageProps} />
//     </div>
//   );
// }