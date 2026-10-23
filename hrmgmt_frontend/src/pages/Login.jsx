import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login() {
    let[emailid,setEmailId] = useState("")
    let[password,setPassword] = useState("")
    let [error, setError]=useState("")
    let navigate = useNavigate()
    let handleLogin = (event)=>{
        event.preventDefault()
        if(emailid=="admin@gmail.com" && password == "admin"){
            navigate("/UserHome")
        }
        else{
            console.log("Login Failed")
        }
    }
    return(<div>
        <form onSubmit={handleLogin}>
            <input type="text" value={emailid} onChange={(e)=>setEmailId(e.target.value)} placeholder="Enter EmailId"/><br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /><br></br>
            <button type = "Submit"> Login </button>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    )
}
export default Login