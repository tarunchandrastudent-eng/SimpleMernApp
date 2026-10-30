import './Header_com.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header_component(){
  useLocation()
  let currentuser=Json.parse(localStorage.getItem("currentuser")||"null")
  let navigate = useNavigate()
  let handleLogout=(e)=>{
    localStorage.removeItem("currentuser")
    navigate("/login")
  }
  return(
    <div>
      <div className="header">
      <Link to="/Home">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>
      {/* if not logged in  */}
      {!currentuser && (
        <div>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        </div>
      )}
      
      {/* if logged in as hr */}
      {currentuser && currentuser.role=="HR" &&(
        <div>
          <link to ="#">Assign Task</link>
          <button onClick={handleLogout}>logout</button>
        </div>
      )}

      {/* if logged in as emp */}
      {
      currentuser && currentuser.role=="EMPLOYEE" &&(
        <div>
          <link to ="#">Assign Task</link>
          <button onClick={handleLogout}>logout</button>
        </div>
      )}

      </div>
    </div>
  )
}
export default Header_component