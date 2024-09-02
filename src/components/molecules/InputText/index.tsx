import React from 'react'
import Text from '@/components/atoms/Text'
import styles from './styles.module.css'

export interface InputTextProps{
    className?: string
    inputClassName?: string
    label: string
    labelClassName?: string;
    children?: React.JSX.Element[]
    disabled?: boolean
}

export default function InputText({disabled = false, className = '', inputClassName = '', labelClassName = '', label}: InputTextProps) {
    return (
        <div className={`${styles.mainContainer} ${className}`}>
            <Text className={`${styles.label} ${labelClassName}`}>{label}</Text>
            <input disabled={disabled} className={`${styles.input} ${inputClassName}`}/>
        </div>
      )
}
