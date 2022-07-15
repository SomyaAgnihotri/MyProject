import React, {Component} from "react";
import Navdash from './Navdash';
import Login from './Login';
import DashboardAdmin from "./DashboardAdmin";
import DashboardTeacher from "./DashboardTeacher";
import DashboardStudent from "./DashboardStudent";
import RegisterWindow from './RegisterWindow';
import VerifyWindow from './VerifyWindow';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class Mainfile extends Component{
    render(){
        return(
            <BrowserRouter>
            <Navdash/>
            <Routes>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/DashboardAdmin" element={<DashboardAdmin/>}></Route>
                <Route path="/DashboardTeacher" element={<DashboardTeacher/>}></Route>
                <Route path="/DashboardStudent" element={<DashboardStudent/>}></Route>
                <Route path="/RegisterWindow" element={<RegisterWindow/>}></Route>
                <Route path="/VerifyWindow" element={<VerifyWindow/>}></Route>
            </Routes>
            </BrowserRouter>    

        );
    }
}
export default Mainfile;