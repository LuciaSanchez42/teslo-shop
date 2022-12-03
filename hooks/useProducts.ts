import useSWR, { SWRConfiguration } from 'swr'
import { IProduct } from '../ts'

// const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json())
const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IProduct[]>(`/api${url}`, config)
  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error
  }
}
export default useProducts
