import Skills from './Skills'
import resumeFile from '../../assets/files/VickyLoebel-Resume.pdf'
import mySkills from './skills.json';

const Resume = () => {
  return (
    <div>
      <button className='btn-resume'>
        <a href={resumeFile} download>Download My Resume</a>
      </button>
      <p>
      Vicky Loebel began her technical career as a systems programmer on the flight simulators at the NASA Ames research facility in Silicon Valley, followed by several years' experience as a contract coder and software technical writer. Her education includes a BA in Lingustics from the University of Wisconsin and a Masters of Computer Science from San Jose State. She is currently enrolled in the University of Arizona's Full-Stack Web Developemnt Bootcamp with the goal of seeking freelance work in website design and development.
  </p>  
      <h2 className="proficiencies">Proficiencies</h2>
      <Skills mySkills={mySkills}/>
    </div>
  )
}

export default Resume

