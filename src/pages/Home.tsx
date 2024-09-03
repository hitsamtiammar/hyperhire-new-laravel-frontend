import { deleteData, getAllDataFromRootId, getRootData, updateData } from '@/api/actions'
import { RootApiResponse } from '@/api/actions.interface'
import { ListDataItem } from '@/components/organismn/ListData'
import { currentRoot, selectedItemState } from '@/recoil/atoms'
import Home from '@/templates/Home/Home'
import { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { useRecoilState, useSetRecoilState } from 'recoil'

export default function HomePage() {
  const [rootId, setRootId] = useState('')
  const { data, isLoading } = useQuery<RootApiResponse>('rootData',  getRootData)
  const { data: currData, refetch: refetchMainData } = useQuery(['mainData', rootId], 
    () => getAllDataFromRootId(rootId), 
    {
      enabled: !!rootId
  })
  const updateMutation = useMutation(updateData)
  const deleteMutation = useMutation(deleteData)
  const [currendDataValue, setCurrentDataValue] = useRecoilState(currentRoot)
  const setSelectedItem = useSetRecoilState(selectedItemState)
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
      // updateMutation.mutate({
      //   id: item.id,
      //   name: name
      // })
    }
  }

  function reloadData(){
    setSelectedItem(null);
    setCurrentDataValue(undefined)
    refetchMainData()
  }

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

  return (
    <Home 
      onRootChange={onRootChange}
      rootData={data?.menus || []}
      rootDataLoading={isLoading || updateMutation.isLoading || deleteMutation.isLoading}
      mainData={currendDataValue}
      onSave={onSave}
      onDelete={onDelete}
    />
  )
}
