import resumeFile from '../../assets/files/VickyLoebel-Resume.pdf'
const Resume = () => {
  return (
    <div>
      <div className='btn-resume'>
        <a href={resumeFile} download>Download My Resume</a>
      </div>
      {/* also display resume */}
      <h2>Proficiencies</h2>
      <p>Hi! I'm Vicky, and I'm all about taking thoughts and expressing them clearly.
        Whether that means writing code, writing documentation, tutorials, or original content, my passion is to bring ideas into the world.</p>
      <p>Download my resume and send me a note. I can't wait to start working together. </p>
    </div>
  )
}

export default Resume

