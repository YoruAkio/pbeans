import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | PBeans Coffee"
        defaultTitle="PBeans Coffee - Japanese-inspired Coffee Experience in Indonesia"
        description="Experience authentic Japanese coffee culture in Indonesia. PBeans merges traditional Japanese brewing techniques with premium Indonesian coffee beans."
        canonical="https://pbeans.vercel.app/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://pbeans.vercel.app/',
          siteName: 'PBeans Coffee',
          title: 'PBeans Coffee - Japanese-inspired Coffee Experience in Indonesia',
          description: 'Authentic Japanese coffee culture in the heart of Indonesia. Premium beans, traditional brewing methods.',
          images: [
            {
              url: 'https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/pbeans/3d_beans_compressed.png',
              width: 1200,
              height: 630,
              alt: 'PBeans Coffee Shop',
            }
          ],
        }}
        twitter={{
          handle: '@yoruakio',
          site: '@yoruakio',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'coffee, japanese coffee, indonesia coffee, specialty coffee, matcha latte, hojicha, cafe, coffee shop, jakarta coffee'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ]}
      />
      <Head>
        <link rel="icon" href="https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/pbeans/3d_beans_compressed.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}