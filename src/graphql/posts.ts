import { getClient } from '@@app/components/ApolloClient'
import { PostType } from '@@app/types'
import { gql } from '@apollo/client'

const recentPostsQuery = gql`
  query RecentPosts($limit: Int) {
    posts(first: $limit, orderBy: date_DESC, stage: PUBLISHED) {
      slug
      title
      date
    }
  }
`

const allPostsQuery = gql`
  query AllPosts {
    posts(orderBy: date_DESC, stage: PUBLISHED) {
      slug
      title
      date
    }
  }
`

export const getLastPosts = async (limit: number = 5) => {
  const { data } = await getClient().query<{ posts: PostType[] }>({
    query: recentPostsQuery,
    variables: { limit }
  })
  return data.posts
}

export const getAllPosts = async () => {
  const { data } = await getClient().query<{ posts: PostType[] }>({
    query: allPostsQuery
  })
  return data.posts
}
