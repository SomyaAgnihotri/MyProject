import { Component } from "react";
class Compo2 extends Component{
    constructor(){
        super()
        this.state = {
            "Profile" : " ",
            "Upload Teacher" : " ",
            "Upload Student" : "",
            "OMR SHeet Upload" : " "
        }
    }
    render(){
        return(<div>
            <input type = "Submit" name="dashboard" value="Admin Dashborad"></input> <br></br>
            <li>Profile</li>
            <li>Upload Teacher</li>
            <li>Upload Student</li>   
            <li>OMR Sheet Upload</li>
        </div>)
    }
}
export default Compo2;
