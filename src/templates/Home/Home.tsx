import React from 'react'
import BreadCrumb from '@/components/molecules/BreadCrumb'
import HeadingLogo from '@/components/molecules/HeadingLogo'
import styles from './styles.module.css'
import InputSelect from '@/components/molecules/InputSelect'
import Button from '@/components/atoms/Button'
import EditForm from '@/components/organismn/EditForm'
import { RootMenu } from '@/api/actions.interface'

export interface HomeProps{
  rootData: RootMenu[]
  rootDataLoading?: boolean
}

export default function Home({ rootData, rootDataLoading = false }: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <BreadCrumb className={styles.headingContainer} items={['Menus']}/>
      <HeadingLogo  className={styles.headingContainer}/>
      <InputSelect disabled={rootDataLoading} label="Menu" className={styles.menuSelect} >
        {rootData.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </InputSelect>
      <div className={styles.leftContainer}>
        <div className="flex-1">
          <div className={styles.buttonGroup}>
            <Button className={styles.buttonExpandAll}>Expand All</Button>
            <Button className={styles.buttonCollapseAll}>Collapse All</Button>
          </div>
        </div>
        <div className="flex-1">
          <EditForm/>
        </div>
      </div>
     
    </div>
  )
}
