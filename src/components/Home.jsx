import React, { useReducer } from 'react'
import '../styles/home.scss'
import { Products } from './Products'
import { Handler } from './Handler'
import { productReducer } from '../reducers/productReducer'

export const Home = () => {
  const [state, dispatch] = useReducer(productReducer, {tools: []})
  return (
    <div className='content-page'>
        <Products state={state} dispatch={dispatch} />
        <Handler state={state} dispatch={dispatch} />
    </div>
  )
}
