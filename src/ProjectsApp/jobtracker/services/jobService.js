import axios from "axios";

async function getJobs(){
    try{
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/jobs", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = response.data;
        return response.data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function createJob(job){
    try{
        const token = localStorage.getItem("token");
        const response = await axios.post("http://localhost:5000/jobs", job, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        });
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function updateJob(id, updates){
    try{
        const token = localStorage.getItem("token");
        const response = await axios.patch(`http://localhost:5000/jobs/${id}`, updates, {
            headers: {
                Authorization: `Bearer ${token}`
            } })
        return response.data
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

async function deleteJob(id){
    try{
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/jobs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

export { getJobs, createJob, updateJob, deleteJob };