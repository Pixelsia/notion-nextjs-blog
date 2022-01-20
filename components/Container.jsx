import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Pixelsiaの開発ブログ',
    description: `しょうもない記事から、おもしろい記事まで、Pixelsiaの開発ブログです。`,
    type: 'website',
    image: 'https://blog.pixelsia.net/site.png',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://https://blog.pixelsia.net${router.asPath}`} />
        <link rel="canonical" href={`https://blog.pixelsia.net${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Pixelsia_JP" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <main id="skip">
        {children}
        <Footer />
      </main>
    </>
  )
}
