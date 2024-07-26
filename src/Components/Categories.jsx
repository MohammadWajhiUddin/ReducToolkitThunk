import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {GetAllCategories} from '../features/ProductsSlice'
const Categories = () => {

    const dispatch = useDispatch();
useEffect(()=>{
   const a =  dispatch(GetAllCategories)
   console.log(a)

},[dispatch])

  return (
    <div>Categories</div>
  )
}

export default Categories