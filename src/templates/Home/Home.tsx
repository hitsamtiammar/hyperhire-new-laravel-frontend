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
  onSave?: (item: ListDataItem | null, name: string) => void
  onDelete?: (item: ListDataItem | null, name: string) => void
  onAddRoot?: () => void
  onExpandAll?: () => void
  onCollapseAll?: () => void
}

function Home({ onDelete, onCollapseAll, onExpandAll, onAddRoot, onSave, onRootChange = noop, rootData, mainData, rootDataLoading = false }: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <BreadCrumb className={styles.headingContainer} items={['Menus']}/>
      <HeadingLogo  className={styles.headingContainer}/>
      <div className="flex flex-col justify-start">
        <InputSelect onChange={(e) => onRootChange(e.target.value)} disabled={rootDataLoading} label="Menu" className={styles.menuSelect} >
          <>
            {rootData.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
          </>
        </InputSelect>
        <Button onClick={onAddRoot} className={styles.addRootButton} >Add New Root + </Button>
      </div>
    
      <div className={styles.leftContainer}>
        <div className="flex-1">
          <div className={styles.buttonGroup}>
            <Button onClick={onExpandAll} className={styles.buttonExpandAll}>Expand All</Button>
            <Button onClick={onCollapseAll} className={styles.buttonCollapseAll}>Collapse All</Button>
          </div>
          {mainData &&  <ListData data={mainData as ListDataItem}  /> }
        </div>
        <div className="flex-1">
          <EditForm onDelete={onDelete} onSave={onSave} />
        </div>
      </div>
     
    </div>
  )
}

export default Home
