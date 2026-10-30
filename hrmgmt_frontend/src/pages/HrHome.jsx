import { useNavigate } from "react-router-dom"
function HrHome(){
    let navigate = useNavigate()
    //we use JSON.parse to convert json to string
    let currentuser = JSON.parse(localStorage.getItem("currentuser"))
    //logout function
    let handleLogout=(e)=>{
        localStorage.removeItem("currentuser")
        navigate("/login")
    }
    return(
    <div>
        <h1>HR Management</h1>
        <p>Welcome to the HR Management System</p>
        <h2>welcome {currentuser.name}</h2>
        <button onClick={handleLogout}> Logout </button>
    </div>)
}
export default HrHome