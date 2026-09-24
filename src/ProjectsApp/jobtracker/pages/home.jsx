import { useJobContext } from "../context/JobContext";
import { useAuthContext } from "../context/AuthContext";
import JobCard from "../components/JobCard";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
function Home() {
    const { jobs, loading, error } = useJobContext();
    const totalApplications = jobs.length;
    const totalApplied = jobs.filter( job => job.status === "Applied").length;
    const totalInterviews = jobs.filter( job => job.status === "Interview").length;
    const totalOffers = jobs.filter( job => job.status === "Offer").length;
    const featuredJobs = [...jobs];
    const { user } = useAuthContext();
    const navigate = useNavigate();
   
    const recentJobs = featuredJobs.sort((a,b) => new Date(b.date_applied) - new Date(a.date_applied)).slice(0, 3);
    if(error){
        return <Error />
    }
    if(loading){
        return <Loading />
    }
    return (
        <main className="w-full min-h-screen bg-gray-50 px-4 py-8 relative">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8"> {user === null ? (<>
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Job Tracker
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Keep track of your job applications and their progress.
                    </p>
                    </>) : (<>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Welcome back, {user?.email?.split("@")[0].charAt(0).toUpperCase() + user?.email?.split("@")[0].slice(1)}
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Keep track of your job applications and their progress.
                    </p>
                     </>)}   
                </header>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    <div className=" p-4 rounded-md bg-white shadow-sm border-l-4 border-gray-400">
                        <p className="text-sm text-gray-500 ">Total Applications</p>
                        <p className="text-3xl py-3">{totalApplications}</p>
                    </div>

                    <div className=" p-4 rounded-md bg-white shadow-sm border-l-4 border-blue-400">
                        <p className="text-sm text-gray-500 ">Applied</p>
                        <p className="text-3xl py-3">{totalApplied}</p>
                    </div>

                    <div className=" p-4 rounded-md bg-white shadow-sm border-l-4 border-yellow-400">
                        <p className="text-sm text-gray-500 ">Interviews</p>
                        <p className="text-3xl py-3">{totalInterviews}</p>
                    </div>

                    <div className=" p-4 rounded-md bg-white shadow-sm border-l-4 border-green-400">
                        <p className="text-sm text-gray-500 ">Offers</p>
                        <p className="text-3xl py-3">{totalOffers}</p>
                    </div>
                </section>

                <section className="py-2">
                    {recentJobs.length > 0 ? (
                        <div>
                    <div className="flex items-center justify-between">
                    <p className="text-2xl">Recent Applications</p>
                    <Link className="text-sm text-gray-500 px-4 hover:text-black"
                    to='/jobs'>View All →</Link>
                    </div> 
                    <div className="py-4 gap-3 grid">
                    {recentJobs.map(job => (
                        <JobCard 
                        job={job}
                        showAction={false}
                        key={job.id} />
                    ))}
                    </div>
                    </div>
                ) : (
                    <div className="w-full flex justify-between px-10 bg-white my-3 shadow-lg rounded-sm py-15 "><p className="text-3xl font-semibold">No Applications</p>
                    <button
                            
                            onClick={() => navigate("/projects/job-tracker/jobs")}
                            className=" items-center gap-2 px-4 py-2 bg-gray-50 text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors"
                        >
                            <i className="fa-solid fa-plus text-xs"></i>
                            <span className="ml-2">Add Application</span>
                        </button>
                    </div>)}
                    
                </section>
            </div>
        </main>
    );
}

export default Home;