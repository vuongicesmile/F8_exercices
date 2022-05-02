import React from 'react'
import {useContext} from 'react'
import { ThemeContext} from '../../ThemeContext'

function Paragraph() {
  
  const context = useContext(ThemeContext)

  return (
    <div className={context.theme}>
        noi dung hien thi
    </div>
  )
}

export default Paragraph