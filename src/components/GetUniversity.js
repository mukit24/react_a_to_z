function GetUniversity() {

    const varsityName = (name) =>{
        alert(name)
    }
    const skills = ['Django','React','Express']

  return (
    <div>
        <h4>Skills:</h4>
        <ul>
            {skills.map((skill) => <li key={skills.indexOf(skill)}>{skill}</li>)}
        </ul>
        <button onClick={() => varsityName('Khulna University')}>Get University</button>
    </div>
  )
}

export default GetUniversity