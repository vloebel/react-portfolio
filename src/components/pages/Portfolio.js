import { useState } from 'react'
import Button from '../Button'
import myProjectList from './portfolio.json';

const Portfolio = () => {
  const [pIndex, setpIndex] = useState(0);
  const maxIndex = myProjectList.length - 1;

  return (
    <section>
      <div className="flex-container">
        <Button className="btn"
          text={'Back'}
          onClick={() => (pIndex === 0) ? setpIndex(maxIndex) : setpIndex(pIndex - 1)}
        /> 
        <h1 className="inline-header">{myProjectList[pIndex].name}</h1>
        <Button className="btn"
          text={'Next'}
          onClick={() => (pIndex === maxIndex) ? setpIndex(0) : setpIndex(pIndex + 1)}
        /> 
      </div>
        <div className="flex-container" >
          <h3>{myProjectList[pIndex].skills}</h3>
        <a href={myProjectList[pIndex].appLink}>
        <img src={myProjectList[pIndex].srcImg} alt={myProjectList[pIndex].alt} />
          </a>
        </div>                
    </section>
  )
};

export default Portfolio
