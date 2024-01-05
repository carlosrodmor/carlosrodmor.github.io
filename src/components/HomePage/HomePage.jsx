import './HomePage.css'
import profilePhoto from '../../assets/profileCarlos.png'
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect'
import CardProject from '../CardProject/CardProject'
import firstProjectImg from '../../assets/firstproject.jpeg'
import secondProjectImg from '../../assets/secondproject.jpeg'
import finalProjectImg from '../../assets/finalproject.jpeg'
import Timeline from '../Timeline/Timeline'
import { useEffect } from 'react'
import htmlImg from '../../assets/html5.png'
import cssImg from '../../assets/css.png'
import jsImg from '../../assets/js.png'
import reactImg from '../../assets/react.png'
import nodeImg from '../../assets/node.png'
import ImageSlider from '../ImageSlider/ImageSlider'
export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const scrollPercentage = scrollPosition / (pageHeight - windowHeight)

      const startColor = { r: 0, g: 0, b: 0 }
      const endColor = { r: 0, g: 0, b: 0 }

      const currentColor = {
        r: Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage),
        g: Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage),
        b: Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage)
      }

      document.body.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='HomePage '>
      <div className='grid grid-cols-1 gap-2 allDescription'>
        <div>
          <div>
            <TypewriterEffect
              text='Carlos Rodríguez'
              typingDelay={200}
              className='nameHome'
            />
          </div>
          <p className='descriptionCarlos'>
            I am an enthusiastic and positive professional, with a solid technical
            foundation in web development and programming, including key technologies such
            as <span className='languages'>HTML5</span>,{' '}
            <span className='languages'>CSS</span>, and{' '}
            <span className='languages'>JavaScript</span>. Passionate about continuous
            learning, I also possess skills in{' '}
            <span className='languages'>JavaScript </span>
            frameworks like <span className='languages'>React.js</span>, and in back-end
            development with <span className='languages'>Node.js </span>
            and <span className='languages'>MongoDB</span>. Outside of technology, I enjoy
            the cultural enrichment and well-being that sports and outdoor activities
            provide, such as mountaineering, tennis, and football.
          </p>
        </div>
      </div>
      <div>
        <h2 className='skillsTitle'>Skills</h2>
        <ImageSlider />
      </div>
      <div className='projects grid grid-cols-2 gap-2 ' id='projects-section'>
        <h2 className='projectsTitle'>Projects</h2>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <CardProject
          title={'Ironhack DOM Project'}
          description={
            "This was my first project manipulating the DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)"
          }
          imageUrl={firstProjectImg}
          url={'https://carlosrodmor.github.io/octopus-game/'}
        />
        <CardProject
          title={'Ironhack Back-end Project'}
          description={
            'This was my second project using Node.js, Express.js and AXIOS and also adding some extra front-end development.'
          }
          imageUrl={secondProjectImg}
          url={'https://movies-project2.fly.dev/'}
        />
        <CardProject
          title={'Ironhack Final Project '}
          description={
            'This is the MOST IMPORTANT project I have worked on so far, alongside two colleagues, using the MERN stack.'
          }
          imageUrl={finalProjectImg}
          url={'https://code-connectt.netlify.app/'}
        />
      </div>

      <div id='timeline-section'>
        <h2 className='timelineTitle'>My timeline</h2>
        <Timeline />
      </div>
    </div>
  )
}
