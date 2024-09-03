import InputText from '@/components/molecules/InputText'
import styles from './styles.module.css'
import Button from '@/components/atoms/Button'
import { useRecoilState } from 'recoil'
import { selectedItemState } from '@/recoil/atoms'
import IconButton from '@/components/atoms/IconButton'
import { CgClose } from 'react-icons/cg'

export default function EditForm() {
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState)
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
            <InputText className={styles.inputContainer} label="Name" />
            <Button className={styles.btnSubmit}>Save</Button>
        </div>
    )
}
