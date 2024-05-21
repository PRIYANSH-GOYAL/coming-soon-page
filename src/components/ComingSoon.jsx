import React from 'react'
import cominglogo from '../assets/Images/logo.png'
import nnbackground from '../assets/Images/vid.mp4'


const ComingSoon = () => {
  return (
    <section>
        <div className='container'> 
          <div className="coming-soon">
            <video autoPlay={true} loop={true} src={nnbackground}></video>
          </div>
          <div className="ok">
            <div className="coming-logo">
              <img src={cominglogo} alt="" />
            </div>
            <div className="coming-text">
              <h1 className='neon-text'>coming soon</h1>
            </div>
            <div className="coming-sub">
              <p>innovating with creativity</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ComingSoon