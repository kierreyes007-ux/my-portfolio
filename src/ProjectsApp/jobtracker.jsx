import Home from "./jobtracker/pages/home";
import Jobs from "./jobtracker/pages/Jobs";
import Navbar from "./jobtracker/components/navbar";
import { JobProvider } from "./jobtracker/context/JobContext";
import {  Routes, Route } from "react-router-dom";
function JobTracker(){
    return(
        <div>
            <JobProvider>
                <Navbar />
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/jobs' element={<Jobs />}/>
            </Routes>
            </JobProvider>
        </div>
    )
}

export default JobTracker;