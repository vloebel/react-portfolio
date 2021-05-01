import resumeFile from '../../assets/files/VickyLoebel-Resume.pdf'
const Resume = () => {
  return (
    <div>
      <button className='btn-resume'>
        <a href={resumeFile} download>Download My Resume</a>
      </button>
      <p>
      Vicky Loebel began her technical career as a systems programmer on the flight simulators at the NASA Ames research facility in Silicon Valley, followed by several years' experience as a contract coder and software technical writer. Her education includes a BA in Lingustics from the University of Wisconsin and a Masters of Computer Science from San Jose State. She is currently enrolled in the University of Arizona's Full-Stack Web Developemnt Bootcamp with the goal of seeking freelance work in website design and development.
</p>  

      <h2>Proficiencies</h2>
      <ul className="horizontal-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>GitHub</li>
        <li>JavaScript</li>
        <li>front- and back-end API</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>MVC (Model-View-Controller) architecture</li>
        <li>PWA (Progressive Web Application) design</li>
        <li>React</li>
        {/* <li>MERN stack</li>
        <li>State</li> */}
      </ul>
    </div>
  )
}

export default Resume

