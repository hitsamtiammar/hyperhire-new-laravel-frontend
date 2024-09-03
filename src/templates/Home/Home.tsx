import React from 'react'
import BreadCrumb from '@/components/molecules/BreadCrumb'
import HeadingLogo from '@/components/molecules/HeadingLogo'
import styles from './styles.module.css'
import InputSelect from '@/components/molecules/InputSelect'
import Button from '@/components/atoms/Button'
import EditForm from '@/components/organismn/EditForm'
import { RootMenu } from '@/api/actions.interface'
import ListData, { ListDataItem } from '@/components/organismn/ListData'

export interface HomeProps{
  rootData: RootMenu[]
  rootDataLoading?: boolean
}

const DUMMY_DATA = {
  "status": 1,
  "data": {
      "id": "9ce817b2-d274-4555-aee6-8494729fb15a",
      "name": "System Management",
      "parent": null,
      "children": [
          {
              "id": "9ce817fd-1699-4007-90cf-1daf152cddc9",
              "name": "Api call",
              "parent": "9ce817b2-d274-4555-aee6-8494729fb15a",
              "children": [
                  {
                      "id": "9ce82081-5af8-4ba0-b8ae-270c32f76ca3",
                      "name": "Api New 123",
                      "parent": "9ce817fd-1699-4007-90cf-1daf152cddc9",
                      "children": [],
                      "depth": 3
                  }
              ],
              "depth": 2
          },
          {
              "id": "9ce8180e-3229-4b7b-90ac-a29d0da91f88",
              "name": "Api call 12345",
              "parent": "9ce817b2-d274-4555-aee6-8494729fb15a",
              "children": [],
              "depth": 2
          },
          {
              "id": "9ce81aea-88d2-4916-9058-2f983b2e3e41",
              "name": "Api call hehe",
              "parent": "9ce817b2-d274-4555-aee6-8494729fb15a",
              "children": [
                  {
                      "id": "9ce82e4a-0f72-40a8-8ea8-289741a53cdb",
                      "name": "Api New Design",
                      "parent": "9ce81aea-88d2-4916-9058-2f983b2e3e41",
                      "children": [],
                      "depth": 3
                  },
                  {
                      "id": "9ce83107-32f0-484c-add3-01b7adfc057d",
                      "name": "test new data",
                      "parent": "9ce81aea-88d2-4916-9058-2f983b2e3e41",
                      "children": [],
                      "depth": 3
                  },
                  {
                      "id": "9ce8371a-0cc7-4701-ada8-f3db8c18f09b",
                      "name": "new root",
                      "parent": "9ce81aea-88d2-4916-9058-2f983b2e3e41",
                      "children": [],
                      "depth": 3
                  },
                  {
                      "id": "9ce8389c-f9e6-483c-a386-598c3390258a",
                      "name": "new root 345",
                      "parent": "9ce81aea-88d2-4916-9058-2f983b2e3e41",
                      "children": [],
                      "depth": 3
                  }
              ],
              "depth": 2
          }
      ],
      "depth": 1
  }
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
          <ListData data={DUMMY_DATA.data as unknown as ListDataItem}  />
        </div>
        <div className="flex-1">
          <EditForm/>
        </div>
      </div>
     
    </div>
  )
}
