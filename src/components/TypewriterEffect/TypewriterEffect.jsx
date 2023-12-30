import React, { useState, useEffect } from 'react'

const TypewriterEffect = ({ text, typingDelay, className }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index))
        setIndex(index + 1)
      }, typingDelay)

      return () => clearTimeout(timeoutId)
    }
  }, [index, text, typingDelay])

  return <h1 className={className}>{displayedText}</h1>
}

export default TypewriterEffect
