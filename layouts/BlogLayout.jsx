import Container from '../components/Container'
import Nav from '../components/Nav'

export default function BlogLayout({ children, data }) {
  return (
    <Container
      title={data.properties.Post.title[0].plain_text}
      description={data.properties.Description.rich_text[0].plain_text}
      date={new Date(data.properties.Date.date.start)}
      type="article"
    >
      <Nav />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full px-4">
        {children}
      </article>
    </Container>
  )
}
