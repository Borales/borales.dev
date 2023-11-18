import * as React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variants = tv({
  base: 'container border-1 rounded-md px-5 py-3 shadow-sm text-sm',
  variants: {
    color: {
      warning: 'bg-warning-50 border-warning-200'
    }
  },
  defaultVariants: {
    color: 'warning'
  }
})

type AlertVariants = VariantProps<typeof variants> & {
  children: React.ReactNode
}

export const Alert = ({ children }: AlertVariants) => {
  return <div className={variants()}>{children}</div>
}
