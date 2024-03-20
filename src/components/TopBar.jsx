import React from 'react'
import '../styles/topbar.scss'

export const TopBar = () => {
  const handleClose = () => {
    const close = window.confirm("Are you sure, you want to close this window?")
    close && window.close()
  }
  return (
    <div className='top-bar'>
        <a href='https://www.axiamatic.com/' className='logo'>axiamatic</a>
        <button onClick={handleClose} className='exit-button'>Exit Setup</button>
    </div>
  )
}
