import React from 'react'
import cominglogo from '../assets/Images/new-in.svg'
import videoBg from '../assets/Images/bg-video.mp4'
import email from '../assets/Images/whatsapp-white.png'
import whatsapp from '../assets/Images/email-white.png'


const ComingSoon = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <div className="coming-logo">
            <img src={cominglogo} alt="" />
          </div>
          <div className="coming-text">
            <h1 className='neon-text'>coming soon</h1>
          </div>
          <div className="coming-sub">
            <p>innovating with creativity</p>
          </div>
          <div className="contact-now">
              <a href="mailto:cmpundhir@ideaneuron.com">
                <div className="contact-whatsapp">
                  <img className='contact-img' src={email} alt="" />
                  <p>cmpundhir@ideaneuron.com</p>
                </div>
              </a>
              <a href="tel:859-507-3725">
                <div className="contact-email">
                  <img className='contact-img' src={whatsapp} alt="" />
                  <p>+91 8595073725</p>
                </div>
              </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon