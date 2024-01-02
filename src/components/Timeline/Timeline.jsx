import './Timeline.css'

const Timeline = () => {
  return (
    <section className='design-section'>
      <div className='timeline'>
        <div className='timeline-empty'></div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-component timeline-content'>
          <h3>Ironhack (2023)</h3>
          <p>
            Full Stack Developer (HTML, CSS, JavaScript, MongoDB, Express.js, React.js,
            Node.js)
          </p>
        </div>

        <div className='timeline-component timeline-content'>
          <h3>British Council (2023)</h3>
          <p>C1 Advanced (Aptis ESOL) </p>
        </div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-empty'></div>
        <div className='timeline-empty'></div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-component timeline-content'>
          <h3>Antonio de Nebrija University (2016 - 2020)</h3>
          <p>Bachelor's Degree in Bilingual Primary Education</p>
        </div>
        <div className='timeline-component timeline-content'>
          <h3>Rockbotic (2017 - 2018)</h3>
          <p>Primary school robotics teacher for children using Scratch and Arduino.</p>
        </div>

        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>

        <div className='timeline-empty'></div>
        <div className='timeline-empty'></div>
        <div className='timeline-middle'>
          <div className='timeline-circle'></div>
        </div>
        <div className='timeline-component timeline-content'>
          <h3>ECAM (2014 - 2016)</h3>
          <p>Diploma in Cinematography.</p>
        </div>
      </div>
      <div className='timeline-middle'>
        <div className='timeline-circle'></div>
      </div>
    </section>
  )
}

export default Timeline
