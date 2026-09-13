import Home from "./jobtracker/pages/home"
import { JobProvider } from "./jobtracker/context/JobContext";
function JobTracker(){
    return(
        <div>
            <JobProvider>
            <Home />
            </JobProvider>
        </div>
    )
}

export default JobTracker;