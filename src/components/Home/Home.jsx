import React, { useState } from 'react'
import './Home.css'
import NavButton from '../NavButton/NavButton'
import returnRandomFriendfolio from '../../functions/returnRandomFriendfolio'

export default function Home() {
  const [friendUrl, setFriendUrl] = useState(returnRandomFriendfolio())

  const updateFriendUrl = () => {
    setFriendUrl(returnRandomFriendfolio())
  }

  return (
    <div className='Home'>
      <div className='name'>
        <h1>
          <span className='name-edwin'>EDWIN</span>
          <br /><span className='name-chalmers'>CHALMERS</span>
        </h1>
        <div className='nav-buttons'>
          <div className='places'>
            <NavButton type={"about"} />
            <NavButton type={"projects"} />
            <NavButton type={"mail"} />
          </div>
          <NavButton type={"friends"} url={friendUrl} onClick={updateFriendUrl} />
        </div>
      </div>
      <div className='title'>
        <div className='bio'>
          <p>Empathetic UI UX Designer and Front-End Software Developer with 5 years of experience creating user-centric digital experiences.
            <br />
            <br />(702) 513-0420
            <br />edwin@chalmers.cool
            <br />Denver, CO
          </p>
          <div className='social-buttons'>
            <NavButton type={"linkedin"} url='https://linkedin.com/in/edwinchalmers/' />
            <NavButton type={"github"} url='https://github.com/edwin-chalmers' />
            <NavButton type={"twitter"} url='https://x.com' />
          </div>
        </div>
        <h1>UI UX <br /> DEVELOPER</h1>
      </div>
    </div>
  )
}
