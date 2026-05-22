import { useState, useEffect } from 'react'

export default function Hero() {
  const titles = ['software engineer', 'robotics enthusiast', 'uwaterloo cs alumni','lifelong learner', 'sidequester *:･ﾟ✧']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    let timeout

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
        }, 150)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 100)
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isTyping, currentTitleIndex])

  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <div className="hero-text hero-panel">
          <p className="hero-status">boot: ok · v1.0</p>
          <p className="hero-eyebrow">~/nikki/portfolio</p>
          <h1>
            Hello, I'm <span className="hero-name">Nikki</span>
          </h1>
          <p className="subtitle">
            <span className="prompt">role:</span>{' '}
            <span className="rotating-text">
              {displayedText}
              <span className="cursor" />
            </span>
          </p>
          <p className="bio">
            I build software, bridge physical/digital systems, and chase side quests in art, athletics, and code.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">[ projects ]</a>
            <a href="#about" className="btn btn-secondary">help --about</a>
          </div>
        </div>
      </div>
    </section>
  )
}
