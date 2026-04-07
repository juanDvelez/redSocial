import { useState } from 'react'

function Accordion() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  const photos = [
    { src: 'https://www.w3schools.com/w3images/lights.jpg', alt: 'Lights' },
    { src: 'https://www.w3schools.com/w3images/nature.jpg', alt: 'Nature' },
    { src: 'https://www.w3schools.com/w3images/mountains.jpg', alt: 'Mountains' },
    { src: 'https://www.w3schools.com/w3images/forest.jpg', alt: 'Forest' },
    { src: 'https://www.w3schools.com/w3images/nature.jpg', alt: 'Nature 2' },
    { src: 'https://www.w3schools.com/w3images/snow.jpg', alt: 'Snow' },
  ]

  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        {/* My Groups */}
        <button
          onClick={() => toggleSection('groups')}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i>
          My Groups
        </button>
        {openSection === 'groups' && (
          <div className="w3-container">
            <p>Some text..</p>
          </div>
        )}

        {/* My Events */}
        <button
          onClick={() => toggleSection('events')}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
          My Events
        </button>
        {openSection === 'events' && (
          <div className="w3-container">
            <p>Some other text..</p>
          </div>
        )}

        {/* My Photos */}
        <button
          onClick={() => toggleSection('photos')}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-users fa-fw w3-margin-right"></i>
          My Photos
        </button>
        {openSection === 'photos' && (
          <div className="w3-container">
            <div className="w3-row-padding">
              <br />
              {photos.map((photo, index) => (
                <div key={index} className="w3-half">
                  <img src={photo.src} style={{ width: '100%' }} className="w3-margin-bottom" alt={photo.alt} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
