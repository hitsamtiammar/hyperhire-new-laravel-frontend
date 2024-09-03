import React from 'react'
import styles from './styles.module.css'

export interface ButtonProps{
    children?: React.JSX.Element | string;
    className?: string
    onClick?: () => void
    disabled?: boolean
}

export default function Button({ children, className, disabled = false, ...props }: ButtonProps) {
  return (
    <button className={`${styles.buttonFilled} ${className}`} disabled={disabled} {...props}>{children}</button>
  )
}
