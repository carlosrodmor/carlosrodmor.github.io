import React from 'react'
import './ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'

const ImageSlider = () => {
  const icons = [faHtml5, faCss3Alt, faJs, faReact, faNodeJs]

  const renderIcon = icon => <FontAwesomeIcon icon={icon} style={{ fontSize: '100px' }} />

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
