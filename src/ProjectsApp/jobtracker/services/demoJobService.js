import axios from "axios";
async function getJobs(){
    try{
        const response = await axios.get("http://localhost:5000/demo-jobs");
     
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function createJob(job){
    try{
        const response = await axios.post("http://localhost:5000/demo-jobs", job);
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function updateJob(id, updates){
    try{
        const response = await axios.patch(`http://localhost:5000/demo-jobs/${id}`, updates)
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function deleteJob(id){
    try{
        await axios.delete(`http://localhost:5000/demo-jobs/${id}`);
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

export { getJobs, createJob, updateJob, deleteJob };