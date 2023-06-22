import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../css/components-css/cv.css"

export default function CV() {
    useEffect(
        () => {window.scrollTo(0, 0)},
        []
    )
    return (
        <div className="cv pure-white-bg">
            <div className="cv-main-left">
                <div className="cv-head">
                    <div className="cv-title">
                        <h2>Adrienn Balázs</h2>
                        <p>frontend developer</p>
                    </div>
                    <div className="cv-contacts">
                        <p><HiMail /> adrienn.balazs.93@gmail.com</p>
                        <p><HiPhone /> +36 20 463 9930</p>
                        <p><HiLocationMarker /> 1149, Budapest</p>
                        <p><FaLinkedin /> <Link to="https://www.linkedin.com/in/adrienn-bal%C3%A1zs-704528278/" target="_blank">adrienn-balázs-704528278</Link></p>
                        <p><FaGithub /><Link to="https://github.com/badrienn" target="_blank">badrienn</Link></p>
                    </div>
                </div>
                <section className="cv-about">
                    <h3>Profile</h3>
                    <p>I am an aspiring Frontend Developer with an interest in UX and UI design and a background in IT support and language education. I am looking for a Junior Frontend or Web Developer position where I can get started on my developer career journey and expand my knowledge of this exciting field.</p>
                </section>
                <section className="cv-work-xp">
                    <h3>Work experience</h3>
                    <div className="cv-work-card">
                        <h4>Frontend developer, toy store webshop project</h4>
                        <small className="cv-date">April 2023 - May 2023 | Progmatic Academy</small>
                        <p>Developed the frontend of a webshop with a team of 4 fellow students in React, using Agile/Scrum methodology. My main areas of focus were the overall design, the database query functions, and implementing a feature to add products to the user's Favourites.</p>
                        <small className="work-xp-skills">
                            <span>React</span>
                            <span>CSS</span>
                            <span>Scrum</span>
                            <span>Git</span>
                            <span>Teamwork</span>
                        </small>
                    </div>
                    <div className="cv-work-card">
                        <h4>Desktop Support Technician (L2)</h4>
                        <small className="cv-date">June 2020 - May 2023 | Tata Consultancy Services Hungary</small>
                        <p>Handled client issues escalated by the 1st level support team. Often worked with other support teams to provide solutions for more complex issues. Helped to maintain and expand the team's knowledge base. Provided training for new joiners.</p>
                        <small className="work-xp-skills">
                            <span>Analytical thinking</span>
                            <span>Training</span>
                            <span>Documentation</span>
                            <span>Communication</span>
                        </small>
                    </div>
                    <div className="cv-work-card">
                        <h4>Multilingual Service Desk Analyst (L1)</h4>
                        <small className="cv-date">August 2018 - June 2020 | Tata Consultancy Services Hungary</small>
                        <p>Provided 1st level troubleshooting via phone, email, and chat in English, German, and French. Created a number of user guides and email templates for internal use. Our user base comprised of team members of a medical device manufacturer, from factory worker to C-level.</p>
                        <small className="work-xp-skills">
                            <span>ServiceNow</span>
                            <span>Office 365</span>
                            <span>Windows 10</span>
                            <span>Active Directory</span>
                        </small>
                    </div>
                </section>
            </div>
            <div className="cv-main-right dark-bg">
                <div className="cv-img-container">
                    <img className="profile-pic" src="/profile-pic.jpg" alt="Friendly frontend developer" />
                </div>
                <section className="cv-skills">
                    <h3>Skills & Education</h3>
                    <div className="cv-skill-card">
                        <h4>Languages</h4>
                        <p>Hungarian (first language)</p>
                        <p>English (C2)</p>
                        <p>German (C1)</p>
                        <p>French (C1)</p>
                    </div>
                    <div className="cv-skill-card">
                        <h4>Skills</h4>
                        <p>Frontend programming - HTML, CSS, Javascript, React</p>
                        <p>Analytical thinking</p>
                        <p>Written and spoken communication</p>
                        <p>Design skills</p>
                        <p>Initiative</p>
                    </div>
                    <div className="cv-skill-card">
                        <h4>Education</h4>
                        <ul className="cv-list">
                            <li>
                                <p>Frontend Developer Certificate</p>
                                <small className="cv-date">Progmatic Academy | May 2023</small>
                            </li>
                            <li>
                                <p>Teacher's MSC French and German</p>
                                <small className="cv-date">ELTE BTK | June 2018</small>
                            </li>
                            <li>
                                <p>French BSC with German minor</p>
                                <small className="cv-date">ELTE BTK | June 2015</small>
                            </li>
                        </ul>
                    </div>
                    <div className="cv-skill-card">
                        <h4>Hobbies & Interests</h4>
                        <p>Studying Japanese (2 years of experience)</p>
                        <p>UX and UI design</p>
                    </div>
                </section>
            </div>
        </div>
    )
}