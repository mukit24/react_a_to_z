import { Link } from "react-router-dom"
function Nav() {
  return (
    <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/user'>User</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/form'>Form</Link>
                </li>
                <li>
                    <Link to='/data-fetching'>Data Fetching</Link>
                </li>
            </ul>
            <hr/>
        </nav>
  )
}

export default Nav