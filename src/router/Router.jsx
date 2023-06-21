import { Route, Routes } from "react-router-dom";
import Mainpage from "../components/Mainpage/Mainpage";
import User from "../components/User/User";

const Router = () => {
    return(

        <Routes>
            <Route path="/"                     element= {<Mainpage/>}/>
            <Route path="/user/:userId"         element= {<User/>}/> 
        </Routes>
    )
}

export default Router;