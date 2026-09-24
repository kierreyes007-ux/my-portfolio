import axios from "axios";

async function getJobs(){
    try{
      
        const response = await axios.get("https://jobtracker-backend-bk4w.onrender.com/jobs", {withCredentials: true});
       
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function createJob(job){
    try{
       
        const response = await axios.post("https://jobtracker-backend-bk4w.onrender.com/jobs", job, {withCredentials: true});
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function updateJob(id, updates){
    try{
       
        const response = await axios.patch(`https://jobtracker-backend-bk4w.onrender.com/jobs/${id}`, updates, {withCredentials: true})
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;  
    }
}

async function deleteJob(id){
    try{
       
        await axios.delete(`https://jobtracker-backend-bk4w.onrender.com/jobs/${id}`, {withCredentials: true});
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

export { getJobs, createJob, updateJob, deleteJob };