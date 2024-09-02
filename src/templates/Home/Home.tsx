import React from 'react'
import BreadCrumb from '@/components/molecules/BreadCrumb'
import HeadingLogo from '@/components/molecules/HeadingLogo'
import styles from './styles.module.css'
import InputSelect from '@/components/molecules/InputSelect'
import Button from '@/components/atoms/Button'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <BreadCrumb className={styles.headingContainer} items={['Menus']}/>
      <HeadingLogo  className={styles.headingContainer}/>
      <InputSelect label="Menu" className={styles.menuSelect} >
        {['test 1', 'test 2', 'test 3', 'test 4'].map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </InputSelect>
      <div className={styles.leftContainer}>
        <div className="flex-1">
          <div className={styles.buttonGroup}>
            <Button className={styles.buttonExpandAll}>Expand All</Button>
            <Button className={styles.buttonCollapseAll}>Collapse All</Button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
     
    </div>
  )
}
