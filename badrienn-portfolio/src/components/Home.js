import {Link} from 'react-router-dom'
import "../css/components-css/home.css"

export default function Home(){
    return(
        <>
            <div className='scroll-container'>
                <section className="home-section">
                    <h1>WELCOME</h1>
                    <p>It's good to have you here!</p>
                </section>
                <section className="home-section">
                    <h2>ABOUT ME</h2>
                    <p>I am Adrienn Balázs, an aspiring frontend developer with an interest in UX and UI design, and a background in IT support.</p>
                    <p>This website is meant to showcase my skills as a frontend developer and designer through my school assignments and personal projects.</p>
                    <p>I am looking for opportunities to get started on this exciting new career journey.</p>
                    <Link to="/pages/cv">Check out my CV</Link>
                </section>
                <section className='home-section'>
                    <h2>SCHOOL PROJECTS</h2>
                    <p>Through these small projects I learned the basics of HTML5, CSS, Javascript, and React at Progmatic Academy.</p>
                    <p>Each assignment served to practice the application of a principle or to teach us best practices.</p>
                    <p>Though coming up with a design was not that important for these exercices, I have always made it a point to make the end result not only functional, but also pleasing to the eye.</p>
                    <Link to='/pages/school-projects'>Check out my school projects</Link>
                </section>
                <section className='home-section'>
                    <h2>PERSONAL PROJECTS</h2>
                    <p>Learning does not stop once you are out of school! It should not, anyway.</p>
                    <p>These personal projects are my way of expanding my knowledge on my own and building on the solid foundations I got out of the bootcamp at Progmatic.</p>
                    <p>They are also a lot of fun!</p>
                    <Link to="/pages/personal-projects">Check out my personal projects</Link>
                </section>
            </div>
        </> 
    )
}