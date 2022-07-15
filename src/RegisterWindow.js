import { Component } from "react";
class RegisterWindow extends Component{
    render(){
        return(
            <div className="register">
            <h1 className="h1">REGISTRATION WINDOW</h1>
            <form>
            <br></br>
            <div className="center">
            <label for="Role" placeholder="Role"> Role </label>
            <select name="Role" id="Role">
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
        
            </select> <br></br><br></br><br></br>
            <input type = "Text" placeholder="Username"></input>  <br></br>
            <input type = "Password" placeholder="Password"></input><br></br>
            <input type = "Password" placeholder="Confirm Password"></input><br></br>
                       
            </div>
            <div className="button2">
            <input className="button3" type="file" id="myFile" name="filename"></input> <br></br>
            <input type="button"value="Retake"></input>     <input type="button"value="Upload"></input>
            </div>
            <br></br> <br></br>
            <button type="submit" class="button4">Submit</button>
            </form>
            </div>
        ); 
    }
}
export default RegisterWindow;