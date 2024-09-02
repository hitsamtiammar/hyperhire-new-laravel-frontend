import React from 'react'

export interface TextProps{
    children?: string | JSX.Element | JSX.Element[]
    className?: string;
}

export default function Text({ className, children }: TextProps) {
    return (
        <span className={`${className}`}>{children}</span>
    )
}
