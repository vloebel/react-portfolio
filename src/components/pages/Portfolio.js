import { useState } from 'react'
import Button from '../Button'
import myProjectList from './portfolio.json';

const Portfolio = () => {
  const [pIndex, setpIndex] = useState(0);
  const maxIndex = myProjectList.length - 1;

  
  return (
    <section>
      <div className="flex-project">
        <Button className="btn-project"
          text={'Next'}
          onClick={() => (pIndex === maxIndex) ? setpIndex(0) : setpIndex(pIndex + 1)}
        />
        <h1 className="project-title">{myProjectList[pIndex].name}</h1>
      </div>
        <hr className="hr-project"></hr>
      <div className="project-info">
        <h3>{myProjectList[pIndex].skills}</h3>
        <a href={myProjectList[pIndex].appLink}>
          <img className="project-img" src={myProjectList[pIndex].srcImg} alt={myProjectList[pIndex].alt} />
        </a>
      </div>
    </section>
  )
};

export default Portfolio
