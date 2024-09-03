import React from 'react'
import styles from './styles.module.css'
import Text from '@/components/atoms/Text'

export interface InputSelectProps{
    className?: string
    inputClassName?: string
    label: string
    labelClassName?: string;
    children?: React.JSX.Element | React.JSX.Element[]
    disabled?: boolean
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function InputSelect({disabled = false, className, onChange, inputClassName, labelClassName, label, children}: InputSelectProps) {
  return (
    <div className={`${styles.mainContainer} ${className}`}>
        <Text className={`${styles.label} ${labelClassName}`}>{label}</Text>
        <select onChange={onChange} disabled={disabled} className={`${styles.input} ${inputClassName}`}>
            {children}
        </select>
    </div>
  )
}
