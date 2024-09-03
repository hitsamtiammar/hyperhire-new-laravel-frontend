import { deleteData, getAllDataFromRootId, getRootData, insertData, updateData } from '@/api/actions'
import { InsertRequest, RootApiResponse } from '@/api/actions.interface'
import { ListDataItem } from '@/components/organismn/ListData'
import { actionFlagState, currentRoot, selectedItemState } from '@/recoil/atoms'
import Home from '@/templates/Home/Home'
import { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'
import Swal from 'sweetalert2'

export default function HomePage() {
  const [rootId, setRootId] = useState('')
  const { data, isLoading, refetch: refetchRoot } = useQuery<RootApiResponse>('rootData',  getRootData)
  const { data: currData, refetch: refetchMainData } = useQuery(['mainData', rootId], 
    () => getAllDataFromRootId(rootId), 
    {
      enabled: !!rootId
  })
  const updateMutation = useMutation(updateData)
  const deleteMutation = useMutation(deleteData)
  const insertMutation = useMutation(insertData)
  const [currendDataValue, setCurrentDataValue] = useRecoilState(currentRoot)
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState)
  const actionFlag = useRecoilValue(actionFlagState)

  function onRootChange(value: string){
    if(value){
      setRootId(value)
      setCurrentDataValue(undefined)
    }
  }
  
  function onSave(item: ListDataItem | null, name: string){
    console.log('onSave value', item, name)
    if(item){
      updateMutation.mutate({
        id: item.id,
        name: name
      })
    }
  }

  function onDelete(item: ListDataItem | null, name: string){
    console.log('onDelete value', item, name)
    if(item){
      deleteMutation.mutate({
        id: item.id
      })
    }
  }

  function reloadData(){
    setSelectedItem(null);
    setCurrentDataValue(undefined)
    if(!selectedItem?.parent){
      refetchRoot()
    }else{
      refetchMainData()
      
    }
  }

  function insertNewData(request: InsertRequest){
    insertMutation.mutate(request)
  }

  async function onAddRoot(){
    const { value } = await Swal.fire({
      title: "New Root Data",
      input: "text",
      inputLabel: "Enter your new Root data",
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      }
    });
    console.log('value add', value)
    await insertMutation.mutateAsync({
      name: value,
      parent: null
    })
    refetchRoot()

  }

  useEffect(() => {
    console.log('actionFlag', actionFlag)
    if(actionFlag.type === 'insert'){
      const request = actionFlag.data as InsertRequest
      insertNewData(request)
    }
  }, [actionFlag])

  useEffect(() => {
    if(data && data.menus.length > 0){
      const firstData = data.menus[0];
      setRootId(firstData.id)
    }
  }, [data])

  useEffect(() => {
    if(currData){
      setCurrentDataValue(currData)
    }
  }, [currData])

  useEffect(() => {
    if(updateMutation.status === 'success'){
      reloadData()
    }
  }, [updateMutation.status])

  useEffect(() => {
    if(deleteMutation.status === 'success'){
      reloadData()
      
    }
  }, [deleteMutation.status])

  useEffect(() => {
    if(insertMutation.status === 'success'){
      reloadData()
    }
  }, [insertMutation.status])

  return (
    <Home 
      onRootChange={onRootChange}
      rootData={data?.menus || []}
      rootDataLoading={
        isLoading || 
        updateMutation.isLoading ||
        deleteMutation.isLoading ||
        insertMutation.isLoading
      }
      mainData={currendDataValue}
      onSave={onSave}
      onDelete={onDelete}
      onAddRoot={onAddRoot}
    />
  )
}
