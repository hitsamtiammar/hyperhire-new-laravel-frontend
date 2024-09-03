import React from 'react'
import Text from '@/components/atoms/Text'
import styles from './styles.module.css'
import { noop } from '@/utils'

export interface InputTextProps{
    className?: string
    inputClassName?: string
    label: string
    labelClassName?: string;
    children?: React.JSX.Element[]
    disabled?: boolean
    value?: string
    onChangeText?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputText({disabled = false, onChangeText = noop, value = '', className = '', inputClassName = '', labelClassName = '', label}: InputTextProps) {
    return (
        <div className={`${styles.mainContainer} ${className}`}>
            <Text className={`${styles.label} ${labelClassName}`}>{label}</Text>
            <input onChange={onChangeText} value={value} disabled={disabled} className={`${styles.input} ${inputClassName}`}/>
        </div>
      )
}
