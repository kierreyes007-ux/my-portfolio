import axios from "axios";
const API_URL = import.meta.env.VITE_JOBTRACKER_API_URL;
async function getJobs(){
    try{
        const response = await axios.get(`${API_URL}/demo-jobs`);
     
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function createJob(job){
    try{
        const response = await axios.post(`${API_URL}/demo-jobs`, job);
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function updateJob(id, updates){
    try{
        const response = await axios.patch(`${API_URL}/demo-jobs/${id}`, updates)
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function deleteJob(id){
    try{
        await axios.delete(`${API_URL}/demo-jobs/${id}`);
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

export { getJobs, createJob, updateJob, deleteJob };