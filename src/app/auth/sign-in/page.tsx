import React from 'react'
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";




type Props = {}

const page = (props: Props) => {
  return (
    <LoginLink  postLoginRedirectURL='/dashboard'>sign-in</LoginLink>
  )
}

export default page