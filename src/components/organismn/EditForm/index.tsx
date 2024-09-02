import React from 'react'
import InputText from '@/components/molecules/InputText'
import styles from './styles.module.css'
import Button from '@/components/atoms/Button'

export default function EditForm() {
  return (
    <div className="flex flex-col">
        <InputText label="Menu ID" />
        <InputText className={styles.inputContainer} label="Depth" />
        <InputText disabled className={styles.inputContainer} label="Parent Data" />
        <InputText className={styles.inputContainer} label="Name" />
        <Button className={styles.btnSubmit}>Save</Button>
    </div>
  )
}
