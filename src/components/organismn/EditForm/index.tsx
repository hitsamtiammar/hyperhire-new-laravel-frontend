import InputText from '@/components/molecules/InputText'
import styles from './styles.module.css'
import Button from '@/components/atoms/Button'
import { useRecoilState } from 'recoil'
import { selectedItemState } from '@/recoil/atoms'
import IconButton from '@/components/atoms/IconButton'
import { CgClose } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import { ListDataItem } from '../ListData'
import { noop } from '@/utils'

export interface EditFormProps{
    onSave?: (item: ListDataItem | null, name: string) => void
    onDelete?: (item: ListDataItem | null, name: string) => void
    loading?: boolean
}

export default function EditForm({ onSave = noop, onDelete = noop, loading = false }: EditFormProps) {
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState)
    const [name, setName] = useState<string>(selectedItem?.name || '')

    useEffect(() => {
        setName(selectedItem?.name || '')
    }, [selectedItem?.name])

    if(!selectedItem){
        return  null
    }


    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-end">
                <IconButton onClick={() => setSelectedItem(null)}>
                    <CgClose className="text-red-500" />
                </IconButton>
            </div>
            <InputText disabled value={selectedItem.id} inputClassName="text-bluegrey" label="Menu ID" />
            <InputText disabled value={selectedItem.depth + ''} className={styles.inputContainer} label="Depth" />
            <InputText disabled value={selectedItem.parent + ''} className={styles.inputContainer} label="Parent Data" />
            <InputText disabled={loading} value={name} onChangeText={(e) => setName(e.target.value)} className={styles.inputContainer} label="Name" />
            <div className="display-row">
                <Button disabled={loading} onClick={() => onSave(selectedItem, name)} className={styles.btnSubmit}>Save</Button>
                <Button disabled={loading} onClick={() => onDelete(selectedItem, name)} className={styles.btnDelete}>Delete</Button>
            </div>
        </div>
    )
}
