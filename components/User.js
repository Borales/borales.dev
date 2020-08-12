import { User as ZeitUser } from '@zeit-ui/react'

export default function User() {
  return (
    <ZeitUser
      src="https://avatars2.githubusercontent.com/u/1118933?v=4"
      name={'Alex Bordun'}
    >
      <ZeitUser.Link href="https://github.com/borales">@borales</ZeitUser.Link>
    </ZeitUser>
  )
}
