import Header_component from './components/Header_component'
import Footer_component from './components/Footer_component'
import Home from './pages/Home'
import  About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import {Routes,Route} from 'react-router-dom'
import UserHome from './pages/UserHome'
import Register from './pages/Register'
import AdminHome from './pages/AdminHome'
import EmpHome from './pages/EmpHome'
import HrHome from './pages/HrHome' 

function App() {  
  return (
    <div>
     <Header_component></Header_component> 
    <Routes>
       <Route path ="/Login" element ={<Login/>}> </Route>
       <Route path="/Register" element={<Register/>}></Route>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path = "/UserHome" element = {<UserHome/>}></Route>
       <Route path = "/AdminHome" element = {<AdminHome/>}></Route>  
       <Route path = "/EmpHome" element = {<EmpHome/>}></Route>
       <Route path = "/HrHome" element = {<HrHome/>}></Route>
    </Routes>
    <Footer_component></Footer_component>
    </div>
  )
}
export default App
