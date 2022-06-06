import useGetData from '../hooks/useGetDataOfProducts'
const { nextItems } = useGetData
const ButtonLoadMore = () => {
  return (
    <div className='container d-flex justify-content-center'>
      <button className='btn btn-primary center'>More characters...</button>
    </div>
  )
}

export default ButtonLoadMore
