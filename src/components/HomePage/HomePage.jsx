import './HomePage.css'
import profilePhoto from '../../assets/profileCarlos.png'
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect'
import CardProject from '../CardProject/CardProject'
import firstProjectImg from '../../assets/firstproject.jpeg'
import secondProjectImg from '../../assets/secondproject.jpeg'
import finalProjectImg from '../../assets/finalproject.jpeg'
import Timeline from '../Timeline/Timeline'
import { useEffect } from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

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
    <div className='HomePage'>
      <div className='grid grid-cols-1 gap-2 allDescription'>
        <div className='allText'>
          <div className='carlosText'>
            <TypewriterEffect
              text='Carlos Rodríguez'
              typingDelay={200}
              repeatDelay={5000}
              className='nameHome text-lg md:text-xl'
            />
          </div>
          <p className='descriptionCarlos text-base md:text-lg'>
            Enthusiastic and positive, with a solid technical foundation in web
            development and programming, including key technologies such as{' '}
            <span className='languages'>HTML5</span>,{' '}
            <span className='languages'>CSS3</span>, and{' '}
            <span className='languages'>JavaScript</span>. Passionate about continuous
            learning, I also possess skills in{' '}
            <span className='languages'>JavaScript </span>
            frameworks like <span className='languages'>React </span>and{' '}
            <span className='languages'>Angular</span>, as well as back-end development
            with <span className='languages'>Node.js </span>
            and <span className='languages'>MongoDB</span>. Outside of technology, I enjoy
            the cultural enrichment and well-being that sports and outdoor activities
            provide, such as mountaineering, tennis, and football.
          </p>
        </div>
      </div>
      <div>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold skillsTitle'>Skills</h2>
        <ImageSlider />
      </div>
      <div
        className='projects grid grid-cols-1 md:grid-cols-2 gap-2'
        id='projects-section'
      >
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold projectsTitle'>
          Projects
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6'>
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
          title={'Ironhack Final Project'}
          description={
            'This is the MOST IMPORTANT project I have worked on so far, alongside two colleagues, using the MERN stack.'
          }
          imageUrl={finalProjectImg}
          url={'https://code-connectt.netlify.app/'}
        />
      </div>
      <div id='timeline-section'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold timelineTitle'>
          My timeline
        </h2>
        <Timeline />
      </div>
      <div className='socialIcons' id='contact-section'>
        <a
          href='https://www.github.com/carlosrodmor'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-white mx-10'
        >
          <FaGithub size={72} />
        </a>
        <a
          href='https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-white mx-10'
        >
          <FaLinkedin size={72} />
        </a>
        <a
          href='mailto:carlos97sdg@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          style={{ display: 'inline-block' }}
          className='text-gray-300 hover:text-white mx-10'
        >
          <MdOutlineAlternateEmail size={72} style={{ cursor: 'pointer' }} />
        </a>
      </div>
    </div>
  )
}
