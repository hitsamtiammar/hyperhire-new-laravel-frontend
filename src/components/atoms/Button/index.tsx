import React from 'react'
import styles from './styles.module.css'

export interface ButtonProps{
    children?: React.JSX.Element | string;
    className?: string
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={`${styles.buttonFilled} ${className}`}>{children}</button>
  )
}
