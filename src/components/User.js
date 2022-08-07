import GetUniversity from "./GetUniversity"
function User(props) {
  return (
    <div>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <GetUniversity/>
    </div>
  )
}

export default User