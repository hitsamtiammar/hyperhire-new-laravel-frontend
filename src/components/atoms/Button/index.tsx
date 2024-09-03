import React from 'react'
import styles from './styles.module.css'

export interface ButtonProps{
    children?: React.JSX.Element | string;
    className?: string
    onClick?: () => void
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={`${styles.buttonFilled} ${className}`} {...props}>{children}</button>
  )
}
