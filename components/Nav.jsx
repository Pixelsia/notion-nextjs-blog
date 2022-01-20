import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a className="p-4 sm:p-4 hover:underline" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export default function Nav() {
  return (
    <nav className="flex justify-center items-center max-w-4xl w-full p-8 my-0 mx-auto ">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <div>
        <Link href="/">
          <a className="p-1 sm:p-4 hover:underline">Home</a>
        </Link>
        <ExternalLink href="https://twitter.com/Pixelsia_JP">Contact</ExternalLink>
        <ExternalLink href="https://github.com/Pixelsia/pixelsia_blog">Source Code</ExternalLink>
      </div>
    </nav>
  )
}
