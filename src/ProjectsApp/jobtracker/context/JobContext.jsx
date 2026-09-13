import { createContext, useContext, useState } from "react";
import demoJobs from "../utils/jobs"
const JobContext = createContext();
export function JobProvider( {children} ){
    const [jobs, setJobs] = useState(demoJobs);

        const addJob = (newJob) => {
            setJobs( prev => [...prev, {...newJob}])
        }
        const deleteJob = (jobId) => {
            setJobs( prev => prev.filter(job => job.id !== jobId))
        }
        const updateJob = (jobId, updatedJob) => {
            setJobs( prev => prev.map(job => job.id === jobId ? {...job, ...updatedJob} : job))
        }
        const value = 
        {
            jobs,
            addJob,
            deleteJob,
            updateJob
        }
    return(
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    )
}

export function useJobContext(){
    return useContext(JobContext)
}