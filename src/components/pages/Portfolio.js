import { useState } from 'react'
import Button from '../Button'
import myProjectList from './portfolio.json';

const Portfolio = () => {
  const [pIndex, setpIndex] = useState(0);
  const maxIndex = myProjectList.length - 1;

  return (
    <section>
      <div>
        <h1>{myProjectList[pIndex].name}</h1>
        <Button color={'steelblue'}
          text={'Back'}
          onClick={() => (pIndex === 0) ? setpIndex(maxIndex) : setpIndex(pIndex - 1)}
        /> 
        <Button color={'steelblue'}
          text={'Next'}
          onClick={() => (pIndex === maxIndex) ? setpIndex(0) : setpIndex(pIndex + 1)}
        /> 
      </div>
        <div className="portfolio-item" >
          <h3>{myProjectList[pIndex].skills}</h3>
        <a href={myProjectList[pIndex].appLink}>
        <img src={myProjectList[pIndex].srcImg} alt={myProjectList[pIndex].alt} />
          </a>
        </div>                
    </section>
  )
};

export default Portfolio
