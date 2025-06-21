import { formatDate } from '@@app/helpers/formatDate'
import { PostType } from '@@app/types'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { Listbox, ListboxItem } from '@heroui/listbox'

export default function BlogListing({ posts = [] }: { posts: PostType[] }) {
  if (!posts.length) {
    return <h3>No posts</h3>
  }

  return (
    <Listbox aria-label="Blog listing" items={posts}>
      {({ slug, title, date }) => (
        <ListboxItem
          href={`/blog/${slug}`}
          key={slug}
          variant="flat"
          textValue={slug}
          startContent={<BookOpenIcon className="aspect-square w-10 text-secondary" />}
        >
          <div className="ml-1 flex flex-col">
            <span>{title}</span>
            <span className="text-tiny text-default-400">on {formatDate(date)}</span>
          </div>
        </ListboxItem>
      )}
    </Listbox>
  )
}
