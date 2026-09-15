import { createContext, useContext, useState, useEffect } from "react";
import demoJobs from "../utils/jobs"
import { getJobs, createJob, updateJob as updateJobApi, deleteJob as deleteJobApi } from "../services/jobService";
const JobContext = createContext();
export function JobProvider( {children} ){
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

        const addJob = async (newJob) => {
            try{
                const createdJob = await createJob(newJob);
                setJobs( prev => [...prev, createdJob])
            }catch(err){
                console.log(err.message)
            }
            
        }
        const deleteJob = async (jobId) => {
           try{
            const deletedJob = await deleteJobApi(jobId);
            setJobs( prev => prev.filter(job => job.id !== jobId))
           }catch(err){
            console.log(err.message);
           }
        }
        const updateJob = async (jobId, updatedJob) => {
            try{
            const newUpdatedJob = await updateJobApi(jobId, updatedJob)
            setJobs( prev => prev.map(job => job.id === jobId ? {...job, ...newUpdatedJob} : job))
            }catch(err){
                console.log(err.message);
            }
        }
        const value = 
        {
            jobs,
            addJob,
            deleteJob,
            updateJob,
            loading,
            error,
        }
        useEffect(() => {
            async function loadJobs(){
                
                try{
                    setLoading(true);
                    setError(null);
              const data =  await getJobs();
              console.log(data);
              setJobs(data);
                }catch(err){
                    setError("We couldn't load your job applications.")
                    console.log(err.message);
                }finally{
              setLoading(false);
             
                }
            }

            loadJobs();
        }, [])
    return(
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    )
}

export function useJobContext(){
    return useContext(JobContext)
}