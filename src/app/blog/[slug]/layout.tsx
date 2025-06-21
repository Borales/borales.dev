import { getPost } from '@@app/graphql/post'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const post = await getPost(slug)
  if (!post) {
    notFound()
  }

  return {
    title: `${post.title} | borales.dev`,
    metadataBase: new URL('https://borales.dev'),
    openGraph: {
      title: `${post.title} | borales.dev`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString()
    }
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
