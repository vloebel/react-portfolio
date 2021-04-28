import React from "react";
const IMGPATH = "../../assets/images/"
const projectList = [
  {
    "id": "1",
    "name": `back2work`,
    "skills": `MVC architecture (full stack), mySql/Sequelize, handlebars.js`,
    "srcImg": 'back2work-login.jpg',
    "srcAlt": 'back2work logo',
    "appLink": "https://vllback2work.herokuapp.com"
  },
  {
    "id": "2",
    "name": `day-scheduler`,
    "skills": `javascript`,
    "srcImg": 'day-schedule.jpg',
    "srcAlt": 'back2work logo',
    "appLink": "more http stuff"
  }
]
//     "srcImg": `require('../../assets/images/day-schedule.jpg/')`,
//     <img src={require('../../assets/images/back2work-login.jpg').default} alt={item.alt} />


// (props) 
const Portfolio = () => {
  return (
    // return a section containing item divs
    <section className="portfolio-section">
      {projectList.map(item => (
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
