import { Component } from "react";
class bb extends Component{
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
            <li>OMR Sheet Upload</li>
        </div>)
    }
}
export default bb;
