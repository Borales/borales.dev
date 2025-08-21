import { getClient } from '@@app/components/ApolloClient'
import { PostType } from '@@app/types'
import { gql } from '@apollo/client'

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }, stage: PUBLISHED) {
      title
      date
      slug
      content
    }
  }
`

export const getPost = async (slug: string): Promise<PostType> => {
  const { data } = await getClient().query<{ post: PostType }>({
    query,
    variables: { slug }
  })

  if (!data?.post) {
    throw new Error(`Post with slug "${slug}" not found`)
  }

  return data.post
}
