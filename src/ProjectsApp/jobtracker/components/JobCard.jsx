import { useJobContext } from "../context/JobContext";

function JobCard({ job, handleEdit }) {
    const { deleteJob } = useJobContext();

    const statusStyles = {
        Applied: "bg-blue-50 text-blue-700 border-blue-200",
        Interview: "bg-yellow-50 text-yellow-700 border-yellow-200",
        Offer: "bg-green-50 text-green-700 border-green-200",
        Rejected: "bg-red-50 text-red-700 border-red-200",
        Withdrawn: "bg-gray-50 text-gray-600 border-gray-200"
    };

    return (
        <article className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-gray-900 truncate">
                        {job.position}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                        {job.company}
                    </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={() => handleEdit(job)}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        aria-label="Edit job"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <button
                        onClick={() => deleteJob(job.id)}
                        className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                        aria-label="Delete job"
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-location-dot w-4 text-gray-400"></i>
                    <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <i className="fa-regular fa-calendar w-4 text-gray-400"></i>
                    <span>{job.date_applied.split("T")[0]}</span>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-medium ${
                        statusStyles[job.status]
                    }`}
                >
                    {job.status}
                </span>

                {job.job_url && (
                    <a
                        href={job.job_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        View posting
                        <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"></i>
                    </a>
                )}
            </div>

            {job.notes && (
                <p className="mt-4 text-sm text-gray-500 line-clamp-2">
                    {job.notes}
                </p>
            )}
        </article>
    );
}

export default JobCard;