export const sortPosts = (posts) =>
  posts.sort(({ publishedAt: dateA }, { publishedAt: dateB }) =>
    `${dateA}` < `${dateB}` ? 1 : -1
  )

export const getSlug = (resourcePath) =>
  resourcePath.replace('blog/', '').replace('.mdx', '')
