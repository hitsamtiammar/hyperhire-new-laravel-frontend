import Text from '@/components/atoms/Text'
import { noop } from '@/utils';
import { useRef, useState } from 'react'
import { BiChevronDown, BiPlus, BiCheckCircle } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg';
import styles from './styles.module.css'
import { useSetRecoilState } from 'recoil';
import { selectedItemState } from '@/recoil/atoms';
import IconButton from '@/components/atoms/IconButton';
import React from 'react';

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

function ListData({ data, onRemoveItemClicked = noop }: ListDataProps) {
    const [expanded, setExpanded] = useState(false)
    const [childrenData, setChildrenData] = useState(data.children)
    const [showAddBtn, setShowAddBtn] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const setSelectedItem = useSetRecoilState(selectedItemState)

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

    function onDblClicked(){
        if(data.id){
            setSelectedItem(data);
        }
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
                    <IconButton onClick={onAddBtnClicked} className={styles.plusBtn}>
                        <BiPlus color="white" size="20px"/>
                    </IconButton>
                )}
              
            </>
        )
    }

    function renderAddItem(){
        return (
            <>
                <input ref={inputRef} className="form-input" />
                <IconButton onClick={onChecklistConfirmed} className={styles.addItemBtn}>
                    <BiCheckCircle className={styles.addItemIconCheck} />
                </IconButton>
                <IconButton onClick={onClosePressed} className={styles.addItemBtn}>
                    <CgClose className={styles.addItemIconClose} />
                </IconButton>
            </>
        )
    }

    if(!data){
        return null;
    }

    return (
        <div className={styles.listDataContainer}>
            <div onDoubleClick={onDblClicked} onMouseEnter={onHover} onMouseLeave={onBlur} className={styles.listDataContent}>
                {data.id !== '' ? renderItem() : renderAddItem()}
            </div>
            {expanded && (
                <div className={styles.listDataChild}>
                    <div className={styles.listDataChildHorizontalLine}></div>
                    <div className={styles.listDataChildContainer}>
                        {childrenData?.map(item =>
                            <ListData onRemoveItemClicked={onCancelConfirmed} key={item.id || item.tempId} data={item} />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default React.memo(ListData)