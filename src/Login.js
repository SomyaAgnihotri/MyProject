import { Component } from "react";
class Login extends Component{
    render(){
        return(<div className="Main">
           <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className = "user-box">
                <input type="text" name="Name" placeholder="Username" class="form-control" /> <br></br>
                <input type="password" name="" placeholder="Password" class="form-control" /> <br></br>
                <select name="Role" id="Role">
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                </select> 
                </div>
            <a href = "DashboardStudent.js">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
                </a> 
                <a href = "RegisterWindow .js">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Registration
                </a> 
            </form>
            </div>      
            
        </div>
        );
    }
}
export default Login;