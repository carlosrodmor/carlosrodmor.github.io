import React, { useState, useEffect } from 'react'

const TypewriterEffect = ({ text, typingDelay, className, repeatDelay }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const typingTimeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index))
        setIndex(index + 1)
      }, typingDelay)

      return () => clearTimeout(typingTimeoutId)
    } else {
      const repeatTimeoutId = setTimeout(() => {
        setDisplayedText('')
        setIndex(0)
      }, repeatDelay)

      return () => clearTimeout(repeatTimeoutId)
    }
  }, [index, text, typingDelay, repeatDelay])

  return <h1 className={className}>{displayedText}</h1>
}

export default TypewriterEffect
