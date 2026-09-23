import { createContext, useContext, useState, useEffect } from "react";
import { getJobs, createJob, updateJob as updateJobApi, deleteJob as deleteJobApi } from "../services/jobService";
import { getJobs as demoGetJobs, createJob as demoCreateJob, updateJob as demoUpdateJobApi, deleteJob as demoDeleteJobApi } from "../services/demoJobService";
import { useAuthContext } from "./AuthContext";
const JobContext = createContext();
export function JobProvider( {children} ){
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

        const addJob = async (newJob) => {
            try{
                let createdJob;
                if(user){
                    createdJob = await createJob(newJob);
                }
                else{
                    createdJob = await demoCreateJob(newJob)
                }
                setJobs( prev => [...prev, createdJob])
            }catch(err){
                console.log(err.message)
            }
            
        }
        const deleteJob = async (jobId) => {
           try{
           
            if(user){
            await deleteJobApi(jobId);
            }
            else{
            await demoDeleteJobApi(jobId);
            }
            setJobs( prev => prev.filter(job => job.id !== jobId))
           }catch(err){
            console.log(err.message);
           }
        }
        const updateJob = async (jobId, updatedJob) => {
            try{
                let newUpdatedJob;
                if(user){
                    newUpdatedJob = await updateJobApi(jobId, updatedJob)
                }else{
                    newUpdatedJob = await demoUpdateJobApi(jobId, updatedJob)
                }
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
                    let data;
                    setLoading(true);
                    setError(null);
                    if(user){
                    data =  await getJobs();
                    }
                    else{
                    data = await demoGetJobs();
                    }
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
        }, [user])
    return(
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    )
}

export function useJobContext(){
    return useContext(JobContext)
}