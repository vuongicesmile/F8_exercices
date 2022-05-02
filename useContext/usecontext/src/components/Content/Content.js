import React from 'react'
import Paragraph from '../Paragraph/Paragraph'


function Content(props) {

  const {theme} = props;
  return (
    <div>
        <Paragraph theme={theme}></Paragraph>
    </div>
  )
}

export default Content