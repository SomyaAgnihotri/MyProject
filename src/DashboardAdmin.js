import { Component } from "react";
class DashboardAdmin extends Component{
    render(){
        return(<div className="flexbox-container">
            <h1>ADMIN DASHBOARD</h1>
            <div className="dashboard-left">
            <br></br>
            <button type="Submit" class="btn">Home Page</button><br></br>
            <li> Upload</li>
            <li> View </li><br></br>
            <button type="Submit" class="btn">Upload Teacher</button><br></br>
            <li> Upload</li>
            <li> View </li><br></br>
            <button type="Submit" class="btn">Upload Student</button><br></br>
            <li> Upload</li>
            <li> View </li><br></br> 
            <button type="Submit" class="btn">Upload OMR</button><br></br>
            <li> Upload</li>
            <li> View </li><br></br>
            </div>

            <div className="dashboard-right"> WELCOME </div>
            
            {/* <div className="D1"> 1
            <div className="D2"> 2
            <div className="D3"> 3</div>
            <div className="D4"> 4</div>
            <div className="D5"> 5</div></div>
            </div> */}
            
            </div>          
            );
    }
}
export default DashboardAdmin;