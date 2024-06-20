import './About.css'
import NavButton from '../NavButton/NavButton'

export default function About() {
  return (
    <div className='About center'>
        <div className='about-container'>
        <NavButton type={"back"} to={'/'} />
            <div className='bio'>
            <img src='./assets/headshot-pink.png' />
            <section>
                <h1>About</h1>
                <div className='border' />
                <p>
                I'm Edwin Chalmers, born on Guam and now based in Denver, Colorado. 
                <br />
                <br />
                I blend my passions for music and technology in my work as a UI/UX Designer and Front-End Developer. With over five years in the tech industry, I specialize in creating accessible, visually appealing web applications. My skills span JavaScript, React, and design tools like Figma. I've led projects at Turing and designed intuitive user interfaces at Marrick, always focusing on enhancing user engagement. 
                <br />
                <br />
                Beyond tech, I'm a master scuba diver and musician with a background in both pop songwriting and classical composition, driven by a commitment to creativity and conservation.
                </p>
            </section>
            </div>
        </div>
    </div>
  )
}
