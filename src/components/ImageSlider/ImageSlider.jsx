import React from 'react'
import './ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiMongodb } from 'react-icons/si'

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faAngular
} from '@fortawesome/free-brands-svg-icons'

const ImageSlider = () => {
  const icons = [faHtml5, faCss3Alt, faJs, faReact, faAngular, faNodeJs, <SiMongodb />]

  const renderIcon = icon => {
    if (icon.iconName) {
      return <FontAwesomeIcon icon={icon} style={{ fontSize: '100px' }} />
    } else {
      return React.cloneElement(icon, { style: { fontSize: '100px' } })
    }
  }

  const repeatedIcons = []
  for (let i = 0; i < 100; i++) {
    repeatedIcons.push(...icons.map(renderIcon))
  }

  return (
    <div className='slider-container'>
      <div className='slider'>{repeatedIcons}</div>
    </div>
  )
}

export default ImageSlider
