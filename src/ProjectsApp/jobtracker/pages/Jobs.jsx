import { useJobContext } from "../context/JobContext";
import { useState } from "react";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Jobs() {
    const { jobs, addJob, loading, error } = useJobContext();

    const [showForm, setShowForm] = useState(false);
   
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        location: "",
        status: "Applied",
        date_applied: "",
        job_url: "",
        notes: ""
    });

    const resetForm = () => {
        setFormData({
            company: "",
            position: "",
            location: "",
            status: "Applied",
            date_applied: "",
            job_url: "",
            notes: ""
        });

        setShowForm(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.company ||
            !formData.position ||
            !formData.location ||
            !formData.date_applied
        ) {
            return;
        }

        addJob(formData);
        resetForm();
    };
    const jobCopy = [...jobs];
    const sortedJobs = jobCopy.sort((a,b) => new Date(b.date_applied) - new Date(a.date_applied));
    return (
        <main className="w-full min-h-screen bg-gray-50 px-4 py-8">
            <div className="max-w-6xl mx-auto">

               
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Applications
                            </h2>

                            <span className="text-sm text-gray-500">
                                {jobs.length}{" "}
                                {jobs.length === 1
                                    ? "application"
                                    : "applications"}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                        >
                            <i className="fa-solid fa-plus text-xs"></i>
                            Add Application
                        </button>
                    </div>

              
                    {error ? (
                        <Error />
                    ) : loading ? (
                        <Loading />
                    ) : jobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sortedJobs.map((job) => (
                                <JobCard
                                    job={job}
                                    key={job.id}
                                    showAction={true}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="border border-dashed border-gray-300 rounded-lg py-12 text-center bg-white">
                            <p className="text-sm text-gray-500">
                                No job applications yet.
                            </p>
                        </div>
                    )}
                </section>

            </div>

           
            {showForm && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                            resetForm();
                        }
                    }}
                >
                    <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">

                      
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Add Application
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Add a new job application to your tracker.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={resetForm}
                                className="text-gray-400 hover:text-gray-900 transition-colors"
                                aria-label="Close modal"
                            >
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                        </div>

                   
                        <div className="p-5">
                            <JobForm
                                formData={formData}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                resetForm={resetForm}
                            />
                        </div>

                    </div>
                </div>
            )}
        </main>
    );
}

export default Jobs;