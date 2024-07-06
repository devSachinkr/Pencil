import React from 'react'
import Editor from './editor'
import { useEditor } from '@/hooks/editor';

type Props = {}

const Document = (props: Props) => {
  return (
    <div className=''>
      <Editor/>
    </div>
  )
}

export default Document