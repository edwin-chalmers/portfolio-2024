import './Home.css'
import NavButton from '../NavButton/NavButton'

export default function Home() {
  return (
    <div className='home'>
        <div className='name'>
          <h1>EDWIN <br/> CHALMERS</h1>
            <div className='nav-buttons'>
              <div className='places'>
                <NavButton type={"about"}/>
                <NavButton type={"projects"}/>
                <NavButton type={"mail"}/>
              </div>
                <NavButton type={"friends"} />
            </div>
        </div>
        <div className='title'>
          <div className='bio'>
            <>
              <p>Empathetic UI UX Designer and Front-End Developer 
                <br/>with 5 years of experience creating user-centric digital experiences.
                <br/>
                <br/>(702) 513-0420
                <br/>edwin@chalmers.cool
                <br/>Denver, CO
              </p>
            </>
            <div className='social-buttons'>
              <NavButton type={"linkedin"}/>
              <NavButton type={"github"}/>
              <NavButton type={"twitter"}/>
            </div>
          </div>
          <h1>UI UX <br/> DEVELOPER</h1>
        </div>
    </div>
  )
}
