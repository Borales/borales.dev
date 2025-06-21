'use client'

import User from '@@components/User'
import { Link } from '@@components/elements/Link'
import { DiscussionEmbed } from 'disqus-react'
import { MDXClient, MDXComponents } from 'next-mdx-remote-client'
import { Breadcrumbs } from './breadcrumbs'
import './styles.css'

const components: MDXComponents = {
  h2: (props) => <h2 className="[&>a]:hidden [&>a]:pl-2" {...props} />,
  h3: (props: any) => <h3 className="[&>a]:hidden [&>a]:pl-2" {...props} />,
  h4: (props) => <h4 className="[&>a]:hidden [&>a]:pl-2" {...props} />,
  h5: (props) => <h5 className="[&>a]:hidden [&>a]:pl-2" {...props} />,
  a: (props) => (
    <Link href={props!.href} color="secondary" underline="hover">
      {props.children}
    </Link>
  )
}

export default function BlogPostContent({
  slug,
  content,
  title,
  date
}: {
  slug: string
  content: any
  title: string
  date: string
}) {
  return (
    <>
      <Breadcrumbs active={title} />
      <h1>{title}</h1>

      <div className="flex place-content-between">
        <User />
        <span className="text-xs text-secondary">{date}</span>
      </div>

      <MDXClient {...content} components={components} />

      <DiscussionEmbed
        shortname="borales-blog"
        config={{
          url: `https://borales.dev/blog/${slug}`,
          identifier: slug,
          title
        }}
      />
    </>
  )
}
