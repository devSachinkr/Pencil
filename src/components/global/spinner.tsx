import React from 'react'
import { cn } from '@/lib/utils'
import Loader from './loader'

type LoaderProps = {
  loading?: boolean
  children?: React.ReactNode
  className?: string
}

export const Spinner = ({
  loading,
  children,
  className,
}: LoaderProps) => {
  return loading ? (
    <div className={cn(className || 'w-full py-5 flex justify-center')}>
      <Loader/>
    </div>
  ) : (
    children
  )
}