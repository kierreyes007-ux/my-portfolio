import { useJobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";
import { useState } from "react";
function Home(){
    const { jobs, addJob } = useJobContext(); 
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        location: "",
        status: "",
        dateApplied: "",
        jobUrl: "",
        notes: ""
    });
    const handSubmit = () => {
        
    }
    return(
        <section className="w-full min-h-screen px-4 py-2">
            <h1 className="text-3xl font-bold p-1 w-full text-center">Job tracker</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <JobCard job={job} key={job.id}/>
                ))}
            </div>
            <form>
                <input type="text" placeholder="Company"></input>
                <input type="text" placeholder="Position"></input>
                <input type="text" placeholder="Location"></input>
                    <select defaultValue="">
                        <option value="" className="hidden" disabled>Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Withdrawn">Withdrawn</option>
                    </select>
                <input type="date" placeholder="Date Applied"></input>
                <input type="url" placeholder="Job Url"></input>
                <textarea placeholder="Notes"></textarea>

                <button type="submit">Add Job</button>
            </form>
            
        </section>
    )
}
export default Home;