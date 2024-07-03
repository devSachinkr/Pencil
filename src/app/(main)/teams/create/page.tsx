import InfoBar from '@/components/global/info-bar'
import CreateTeam from '@/components/teams/create-team'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full flex flex-col'>
        <InfoBar/>
        <CreateTeam/>
    </div>
  )
}

export default page