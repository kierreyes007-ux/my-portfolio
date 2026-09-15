import { useState } from "react";
import { useJobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Home() {
    const { jobs, addJob, updateJob, loading, error } = useJobContext();
   
    const [editingJobId, setEditingJobId] = useState(null);

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
        setEditingJobId(null);

        setFormData({
            company: "",
            position: "",
            location: "",
            status: "Applied",
            date_applied: "",
            job_url: "",
            notes: ""
        });
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

        if (editingJobId === null) {
            addJob(formData);
        } else {
            updateJob(editingJobId, formData);
        }

        resetForm();
    };

    const handleEdit = (job) => {
        setEditingJobId(job.id);

        setFormData({
            company: job.company,
            position: job.position,
            location: job.location,
            status: job.status,
            date_applied: job.date_applied,
            job_url: job.job_url,
            notes: job.notes
        });
    };

    return (
        <main className="w-full min-h-screen bg-gray-50 px-4 py-8">
            <div className="max-w-6xl mx-auto">

                <header className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Job Tracker
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Keep track of your job applications and their progress.
                    </p>
                </header>

                <section>
                    <div className="flex items-center justify-between mb-4">
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
                                 
                    { error ? (<Error />) : loading ? (<Loading />) : jobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jobs.map((job) => (
                                <JobCard
                                    job={job}
                                    handleEdit={handleEdit}
                                    key={job.id}
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

                <section className="mt-10">
                    <JobForm
                        editingJobId={editingJobId}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        resetForm={resetForm}
                    />
                </section>
                  
            </div>
        </main>
    );
}

export default Home;