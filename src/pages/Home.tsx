import { getRootData } from '@/api/actions'
import { RootApiResponse } from '@/api/actions.interface'
import Home from '@/templates/Home/Home'
import { useQuery } from 'react-query'

export default function HomePage() {
  const { data, isLoading } = useQuery<RootApiResponse>('rootData',  getRootData)

  return (
    <Home rootData={data?.menus || []} rootDataLoading={isLoading} />
  )
}
