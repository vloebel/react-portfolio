
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// could not get pathing to work out of JSON file, so that's TBD
// import slideData from '../../assets/images/portfolio.json';
const slideData= [
  {
    "id": 1,
    "name": "back2work",
    "skills": "MVC architecture (full stack), mySql/Sequelize, handlebars.js",
    "srcImg": "back2work.jpg",
    "srcAlt": "back2work landing page",
    "appLink": "https://vllback2work.herokuapp.com"
  },
  {
    "id": 2,
    "name": "Visit America",
    "skills": "HTML/Materialize, javascript, front-end API",
    "srcImg": "VisitAmerica.jpg",
    "srcAlt": "Visit America",
    "appLink": "https://vloebel.github.io/happycamper"
  },
  {
    "id": "3",
    "name": "Day-Scheduler",
    "skills": "javascript",
    "srcImg": "day-schedule.jpg",
    "srcAlt": "day scheduler",
    "appLink": "https://vloebel.github.io/day-scheduler"
  },
  {
    "id": 4,
    "name": "Any-budget Expense Tracker",
    "skills": "Progressive Web Applcation, MongoDB",
    "srcImg": "any-budget.jpg",
    "srcAlt": "budget example",
    "appLink": "https://vl-any-budget.herokuapp.com/"
  },
  {
    "id": 5,
    "name": "Talk-Back: Social Network API/back-end",
    "skills": "NoSql Mongoose/MongoDB",
    "srcImg": "talk-back-insomnia.jpg",
    "srcAlt": "talk-back social media back-end",
    "appLink": "https://youtu.be/txrRT5tkMtU"
  },
  {
    "id": 6,
    "name": "just-tech-news (blog)",
    "skills": "CMS blog / MVC architecture",
    "srcImg": "just-tech-news.jpg",
    "srcAlt": "just-tech blog",
    "appLink": "https://vloebel-cms.herokuapp.com"
  }
]

const Slideshow = () => {
  console.log(slideData)
  console.log(`url(${slideData[0].srcImg})`)
    return (
      <div>
        <h1>My Projects </h1>
        <div style={{'backgroundImage': `url(../../assets/images/${slideData[0].srcImg})`}}>
              <span>Slide 1</span>
            </div>
        <img src={require(`../../assets/images/${slideData[1].srcImg}`).default} alt="alt" >   
        </img>
          <h2>same image different import</h2>
        {/* <img src={require(`${slideData[0].srcImg}`).default} alt={slideData[0].srcAlt}></img> */}
        <Slide easing="ease">
          <div className="each-slide">
            <h2>{slideData[0].name}</h2>
            <div style={{'backgroundImage': `url(../../assets/images/${slideData[0].srcImg})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideData[1].srcImg})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideData[2].srcImg})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
