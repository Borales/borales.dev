import { Link } from '@@components/elements/Link'
import { Avatar } from '@nextui-org/avatar'
import Image from 'next/image'

export default function User() {
  return (
    <div className="flex gap-2">
      <Avatar
        ImgComponent={Image}
        imgProps={{ height: 40, width: 40 }}
        src="https://avatars2.githubusercontent.com/u/1118933?v=4"
        alt="Alex Bordun"
        title="Alex Bordun"
      />
      <div className="flex flex-col">
        Alex Bordun
        <Link
          href="https://github.com/borales"
          target="_blank"
          size="sm"
          color="secondary"
          className="decoration-secondary decoration-dashed"
          underline="hover"
          isExternal
        >
          @borales
        </Link>
      </div>
    </div>
  )
}
