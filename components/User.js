import { User as GUser } from '@geist-ui/react'

export default function User() {
  return (
    <GUser
      src="https://avatars2.githubusercontent.com/u/1118933?v=4"
      name={'Alex Bordun'}
    >
      <GUser.Link href="https://github.com/borales">@borales</GUser.Link>
    </GUser>
  )
}
