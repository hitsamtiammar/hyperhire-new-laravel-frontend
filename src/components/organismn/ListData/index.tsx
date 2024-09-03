import Text from '@/components/atoms/Text'
import { noop } from '@/utils';
import { useRef, useState } from 'react'
import { BiChevronDown, BiPlus, BiCheckCircle } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg';
import styles from './styles.module.css'

export interface ListDataItem{
    id: string;
    name: string;
    parent?: string | null
    children: ListDataItem[];
    depth: number
    tempId?:string
}

export interface ListDataProps{
    data: ListDataItem
    onRemoveItemClicked?: (item:ListDataItem) => void
}

export default function ListData({ data, onRemoveItemClicked = noop }: ListDataProps) {
    const [expanded, setExpanded] = useState(false)
    const [childrenData, setChildrenData] = useState(data.children)
    const [showAddBtn, setShowAddBtn] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const onHover = () => {
        setShowAddBtn(true)
    }
    const onBlur = () => {
        setShowAddBtn(false)
    }

    function onAddBtnClicked(){
        setExpanded(true)
        setChildrenData([
            ...childrenData,
            {
                children: [],
                depth: 0,
                id: '',
                name: '',
                parent: data.id,
                tempId: `temp-${new Date().getTime()}`
            }
        ])
    }

    function onClosePressed(){
        onRemoveItemClicked(data);
    }

    function onCancelConfirmed(item: ListDataItem){
        console.log('item to delete', { item })
        const newChildren = childrenData.filter(c => item.tempId !== c.tempId)
        setChildrenData(newChildren)
    }

    function onChecklistConfirmed(){
        const value = inputRef.current?.value;
        console.log('value', { value })
    }

    function renderItem(){
        return (
            <>
                {data.children.length > 0 && (
                      <BiChevronDown onClick={() => setExpanded(!expanded)}  className="text-primary" size="25px" />
                )}
                <Text className="text-sm  text-primary">{data.name}</Text>
                {showAddBtn && (
                    <button onClick={onAddBtnClicked} className={styles.plusBtn}>
                        <BiPlus color="white" size="20px"/>
                    </button>
                )}
              
            </>
        )
    }

    function renderAddItem(){
        return (
            <>
                <input ref={inputRef} className="form-input" />
                <button onClick={onChecklistConfirmed} className={styles.addItemBtn}>
                    <BiCheckCircle className={styles.addItemIconCheck} />
                </button>
                <button onClick={onClosePressed} className={styles.addItemBtn}>
                    <CgClose className={styles.addItemIconClose} />
                </button>
            </>
        )
    }

    return (
        <div className={styles.listDataContainer}>
            <div onMouseEnter={onHover} onMouseLeave={onBlur} className={styles.listDataContent}>
                {data.id !== '' ? renderItem() : renderAddItem()}
            </div>
            {expanded && (
                <div className={styles.listDataChild}>
                    <div className={styles.listDataChildHorizontalLine}></div>
                    <div className={styles.listDataChildContainer}>
                        {childrenData.map(item =>
                            <ListData onRemoveItemClicked={onCancelConfirmed} key={item.id || item.tempId} data={item} />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
