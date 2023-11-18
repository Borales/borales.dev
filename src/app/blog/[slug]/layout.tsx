import { getPost } from '@@app/graphql/post'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
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
