import React from 'react'
import BreadCrumb from '@/components/molecules/BreadCrumb'
import HeadingLogo from '@/components/molecules/HeadingLogo'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className="flex flex-col m-10">
      <BreadCrumb className={styles.headingContainer} items={['Menus']}/>
      <HeadingLogo  className={styles.headingContainer}/>
    </div>
  )
}
