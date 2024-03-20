import React, { useState } from 'react'
import '../styles/handler.scss'
import ReactSelect from 'react-select'
import { options } from '../constants/constants'

export const Handler = ({state, dispatch}) => {
    const [currTool, setCurrTool] = useState()

    const handleButtonClick = () => {
        dispatch({
            type: 'ADD_TOOL',
            payload: currTool
        })
        setCurrTool(null)
    }

    const selectOptions = options.filter(op => !state.tools.includes(op))
    const isSelectDisabled = state.tools.length === 4
  return (
    <div className='handler-wrapper'>
        <div className='step-badge'>1 of 3</div>
        <text className='handler-heading'>Let's add your internal tools</text>
        <text className='handler-content'>Search to quickly add products your team uses today. You will be able to add more products later, but for now let's add four</text>
        <ReactSelect isDisabled={isSelectDisabled} maxMenuHeight={300} isClearable={true} className='selector' options={selectOptions} value={currTool} onChange={setCurrTool} formatOptionLabel={tool => {
            return (
                <div className='option-wrapper'>
                    <img className='option-logo' src={tool.image} alt={tool.label} />
                    <text className='option-label'>{tool.label}</text>
                </div>
            )
        }}  />
        <button onClick={handleButtonClick} className={`handler-next-button ${!currTool ? 'disabled' : ''}`}>Next</button>
    </div>
  )
}
