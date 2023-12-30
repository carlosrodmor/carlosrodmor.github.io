import './HomePage.css'
import profilePhoto from '../../assets/_DSC9423.jpg'
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect'
import CardProject from '../CardProject/CardProject'
import firstProjectImg from '../../assets/firstproject.jpeg'

export default function HomePage() {
  return (
    <div className='HomePage '>
      <div className='grid grid-cols-2 gap-2'>
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
        <div className='colPhoto'>
          <img src={profilePhoto} alt='profilePhoto' className='profilePhoto' />
        </div>
      </div>
      <div className='projects grid grid-cols-2 gap-2'>
        <h2 className='projectsTitle'>Projects</h2>
      </div>
      <div className='grid grid-cols-3 gap-1'>
        <CardProject
          title={'Ironhack DOM Project'}
          description={
            "This was my first project using the JS DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)"
          }
          imageUrl={firstProjectImg}
          url={'https://carlosrodmor.github.io/octopus-game/'}
        />
        <CardProject
          title={'Ironhack DOM Project'}
          description={
            "This was my first project using the JS DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)"
          }
          imageUrl={firstProjectImg}
          url={'https://carlosrodmor.github.io/octopus-game/'}
        />
        <CardProject
          title={'Ironhack DOM Project'}
          description={
            "This was my first project using the JS DOM (If you have a high frame rate (FPS) while gaming, it's advisable to lower it for optimal performance.)"
          }
          imageUrl={firstProjectImg}
          url={'https://carlosrodmor.github.io/octopus-game/'}
        />
      </div>
    </div>
  )
}
