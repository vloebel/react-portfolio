import { Document } from 'react-pdf'
import resumeFile from '../../assets/files/VickyLoebel-Resume-2021.pdf'
const Resume = () => {
  return (
    <div>
      <div className='btn-resume'>
        <a href={resumeFile} download>Download My Resume</a>
      </div>
      {/* also display resume */}
      <Document
        file={"../../assets/files/VickyLoebel-Resume-2021.pdf"}>
      </Document>
    </div>
  )
}

export default Resume

