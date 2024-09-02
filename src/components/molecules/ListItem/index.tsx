import Text from '@/components/atoms/Text'
import React from 'react'

export interface ListItemProps{
    text?: string;
    textStyle?: string;
    Icon: React.FC
    className?: string
}

export default function ListItem({ className = '', text, textStyle = '', Icon }: ListItemProps) {
  return (
    <div className={`flex row cursor-pointer h-12 items-center mx-3.5 ${className}`}>
        {<Icon/>}
        <Text className={`ml-4 text-sm font-bold text-bluegrey ${textStyle}`}>{text}</Text>
    </div>
  )
}
