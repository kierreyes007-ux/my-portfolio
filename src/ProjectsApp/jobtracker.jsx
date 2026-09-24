import Home from "./jobtracker/pages/home";
import Jobs from "./jobtracker/pages/Jobs";
import Navbar from "./jobtracker/components/navbar";
import Login from "./jobtracker/pages/Login";
import Register from "./jobtracker/pages/Register";
import { JobProvider } from "./jobtracker/context/JobContext";
import { AuthProvider } from "./jobtracker/context/AuthContext";
import {  Routes, Route } from "react-router-dom";
function JobTracker(){
    return(
        <div>
            <AuthProvider>
                <JobProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/jobs' element={<Jobs />}/>    
                        <Route path='/login' element={<Login />}/>
                        <Route path='/register' element={<Register />}/>
                    </Routes>
                </JobProvider>
            </AuthProvider>
        </div>
    )
}

export default JobTracker;