import { getAllDataFromRootId, getRootData } from '@/api/actions'
import { RootApiResponse } from '@/api/actions.interface'
import { currentRoot } from '@/recoil/atoms'
import Home from '@/templates/Home/Home'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'

export default function HomePage() {
  const [rootId, setRootId] = useState('')
  const { data, isLoading } = useQuery<RootApiResponse>('rootData',  getRootData)
  const { data: currData } = useQuery(['mainData', rootId], 
    () => getAllDataFromRootId(rootId), 
    {
      enabled: !!rootId
    })
  const [currendDataValue, setCurrentDataValue] = useRecoilState(currentRoot)
  function onRootChange(value: string){
    if(value){
      setRootId(value)
      setCurrentDataValue(undefined)
    }
  }

  useEffect(() => {
    if(currData){
      setCurrentDataValue(currData)
    }
  }, [currData])

  return (
    <Home 
      onRootChange={onRootChange}
      rootData={data?.menus || []}
      rootDataLoading={isLoading}
      mainData={currendDataValue}
    />
  )
}
