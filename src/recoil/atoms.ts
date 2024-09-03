import { ListDataItem } from "@/components/organismn/ListData";
import { atom } from "recoil";
import { ActionFlag } from "./atoms.interface";

export const selectedItemState = atom<ListDataItem | null>({
    key: 'selectedItem',
    default: null
})

export const currentRoot = atom<ListDataItem | undefined>({
    key: 'currentRoot',
    default: undefined
})

export const actionFlagState = atom<ActionFlag>({
    key: 'actionFlag',
    default: {
        type: '',
        data: {}
    }
})
