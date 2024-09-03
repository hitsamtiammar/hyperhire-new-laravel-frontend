import React from 'react'
import BreadCrumb from '@/components/molecules/BreadCrumb'
import HeadingLogo from '@/components/molecules/HeadingLogo'
import styles from './styles.module.css'
import InputSelect from '@/components/molecules/InputSelect'
import Button from '@/components/atoms/Button'
import EditForm from '@/components/organismn/EditForm'
import { RootMenu } from '@/api/actions.interface'
import ListData, { ListDataItem } from '@/components/organismn/ListData'
import { noop } from '@/utils'

export interface HomeProps{
  rootData: RootMenu[]
  rootDataLoading?: boolean
  onRootChange: (value: string) => void
  mainData?: ListDataItem
}

function Home({ onRootChange = noop, rootData, mainData, rootDataLoading = false }: HomeProps) {
  console.log('mainData', mainData)
  return (
    <div className={styles.homeContainer}>
      <BreadCrumb className={styles.headingContainer} items={['Menus']}/>
      <HeadingLogo  className={styles.headingContainer}/>
      <InputSelect onChange={(e) => onRootChange(e.target.value)} disabled={rootDataLoading} label="Menu" className={styles.menuSelect} >
      <>
        {rootData.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
          <option value="">
            <Button className="bg-blue-500">--- Add New Root ---</Button>
          </option>
      </>
      </InputSelect>
      <div className={styles.leftContainer}>
        <div className="flex-1">
          <div className={styles.buttonGroup}>
            <Button className={styles.buttonExpandAll}>Expand All</Button>
            <Button className={styles.buttonCollapseAll}>Collapse All</Button>
          </div>
          {mainData &&  <ListData data={mainData as ListDataItem}  /> }
        </div>
        <div className="flex-1">
          <EditForm/>
        </div>
      </div>
     
    </div>
  )
}

export default Home
