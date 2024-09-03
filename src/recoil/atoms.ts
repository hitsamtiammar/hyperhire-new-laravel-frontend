import { ListDataItem } from "@/components/organismn/ListData";
import { atom } from "recoil";

export const selectedItemState = atom<ListDataItem | null>({
    key: 'selectedItem',
    default: null
})

export const currentRoot = atom<ListDataItem | undefined>({
    key: 'currentRoot',
    default: undefined
})
