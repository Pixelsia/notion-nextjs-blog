import Nav from '../components/Nav'
import Container from '../components/Container'
import Link from 'next/link'
import { getNotionData } from '../lib/getNotionData'
import dynamic from 'next/dynamic'

const AnimationBg = dynamic(() => import('../components/AnimationBg2'))

export default function Home({ posts }) {
  return (
    <Container>
      <div className="w-full h-96 bg-slate-800 relative">
        <div className="z-10 relative text-white">
          <Nav />
          <div className="max-w-2xl mx-auto mb-16 text-white px-4">
            <h1 className="font-bold text-3xl md:text-center w-full md:text-5xl tracking-tight mb-2 mx-auto max-w-xl">
              楽しさを次の次元へ
              <br />
              Pixelsiaの開発ブログ
            </h1>
            <p className="mb-5 md:text-center max-w-xl mx-auto">
              二時間ぐらいで作ったPixelsiaのブログ。Next.js,Notion,Vanta.jsを使ってます
            </p>
          </div>
        </div>
        <AnimationBg />
      </div>
      <div className="max-w-2xl mx-auto mb-16 px-4 sm:px-0">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8 text-black">
          記事一覧
        </h2>
        {!posts.length && <p className="text-gray-600 mb-4">No posts found.</p>}

        {posts.map((post) => {
          return (
            <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
              <a className="w-full">
                <div className="mb-8 w-full">
                  <h3 className="text-xl font-medium w-full text-gray-900">
                    {post.properties.Post.title[0].plain_text}
                  </h3>
                  <p className="text-gray-700 text-md">
                    {post.properties.Description.rich_text[0].plain_text}
                  </p>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID)

  return {
    props: {
      posts: database,
    },
  }
}
