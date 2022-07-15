import { Component } from "react";
class Compo5 extends Component{
    constructor(){
        super()
        this.state = {
            "OMR Read" : " ",
            "Save in Excel" : " "
        }
    }
    render(){
        return(<div>
            <input type = "Submit" name="dashboard" value="OMR Sheet"></input> <br></br>
            <li>OMR Read</li>
            <li>Result</li>
        </div>)
    }
}
export default Compo5;
