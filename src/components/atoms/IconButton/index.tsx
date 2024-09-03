import React from 'react'
import styles from './styles.module.css'

export interface IconButtonProps{
    children?: React.JSX.Element | string;
    className?: string
    onClick?: () => void
}

export default function IconButton({ children, className, ...props }: IconButtonProps) {
  return (
    <button className={`${styles.buttonFilled} ${className}`} {...props}>{children}</button>
  )
}
