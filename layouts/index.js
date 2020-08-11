import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Breadcrumbs } from '@zeit-ui/react'

export default function BlogLayout(frontMatter) {
  return ({ children }) => {
    return (
      <Layout>
        <Head>
          <title>{frontMatter.title} | borales.dev</title>
        </Head>
        <Breadcrumbs>
          <Link href="/">
            <Breadcrumbs.Item href="/" nextLink>
              Home
            </Breadcrumbs.Item>
          </Link>
          <Link href="/blog">
            <Breadcrumbs.Item href="/blog" nextLink>
              Blog
            </Breadcrumbs.Item>
          </Link>
          <Breadcrumbs.Item>{frontMatter.title}</Breadcrumbs.Item>
        </Breadcrumbs>

        <h1>{frontMatter.title}</h1>
        {children}
      </Layout>
    )
  }
}
