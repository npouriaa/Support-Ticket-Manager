import React from 'react'
import './MainSection.css'

const MainSection = (props) => {
  return (
    <div className='MainSection'>
        {props.children}
    </div>
  )
}

export default MainSection