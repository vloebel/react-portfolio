

const Skills = ({mySkills}) => {
  return (
    <ul className="horizontal-list">
      { mySkills.map(skill => (
        <li className="skillset" key={skill.name}>
          {skill.name}
        </li>
      ))}

    </ul>
  
  )
}

export default Skills

