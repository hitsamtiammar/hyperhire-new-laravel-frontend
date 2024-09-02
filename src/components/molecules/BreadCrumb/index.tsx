import React from 'react'
import { MdFolder } from "react-icons/md";
import Text from '@/components/atoms/Text';
import styles from './styles.module.css'

export interface BreadCrumbProps{
    items: string[]
    className?: string
}

export default function BreadCrumb({items, className} : BreadCrumbProps) {
  return (
    <div className={`${styles.mainContainer} ${className}`}>
        <MdFolder className="text-bluegrey-300" size="30px" />
        {items.map(item => (
            <React.Fragment key={item}>
             <Text>/</Text>
             <Text>{item}</Text>
            </React.Fragment>
        ))}
       
    </div>
  )
}
