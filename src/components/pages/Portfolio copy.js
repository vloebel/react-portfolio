import React from "react";
import myProjectList from './portfolio.json';

// const IMGPATH = "../../assets/images/"

// (props) ?
const Portfolio = () => {
  return (
    // return a section containing item divs
    <section className="portfolio-section">
      {myProjectList.map(item => (
        <div className="portfolio-item" key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.skills}</h3>
          <a href={item.appLink}>
            <img src={require(`../../assets/images/${item.srcImg}`).default} alt={item.alt} />
          </a>
        </div>
      )
      )}
    </section>
  )
}

export default Portfolio;
