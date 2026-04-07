import { useState } from 'react'

function Navbar() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          {/* Mobile menu button */}
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            href="#"
            onClick={e => { e.preventDefault(); toggleMobileMenu() }}
            title="Menu"
          >
            <i className="fa fa-bars"></i>
          </a>

          {/* Logo */}
          <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </a>

          {/* Navigation icons */}
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
            <i className="fa fa-globe"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
            <i className="fa fa-user"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
            <i className="fa fa-envelope"></i>
          </a>

          {/* Notifications dropdown */}
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-button w3-padding-large" title="Notifications" onClick={toggleNotifications}>
              <i className="fa fa-bell"></i>
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div className={`w3-dropdown-content w3-card-4 w3-bar-block ${notificationsOpen ? 'w3-show' : ''}`} style={{ width: 300 }}>
              <a href="#" className="w3-bar-item w3-button">One new friend request</a>
              <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
              <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
            </div>
          </div>

          {/* User avatar */}
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
            <img src="https://www.w3schools.com//w3images/avatar2.png" className="w3-circle" style={{ height: 23, width: 23 }} alt="Avatar" />
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide-large w3-hide-medium w3-large ${mobileMenuOpen ? '' : 'w3-hide'}`}>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
      </div>
    </>
  )
}

export default Navbar
