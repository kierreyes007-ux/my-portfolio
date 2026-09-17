import { useState } from "react";
import { useJobContext } from "../context/JobContext";

function JobCard({ job, showAction }) {
    const { deleteJob, updateJob } = useJobContext();

    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        company: job.company,
        position: job.position,
        location: job.location,
        status: job.status,
        date_applied: job.date_applied?.split("T")[0] || "",
        job_url: job.job_url || "",
        notes: job.notes || ""
    });

    const statusStyles = {
        Applied: "bg-blue-50 text-blue-700 border-blue-200",
        Interview: "bg-yellow-50 text-yellow-700 border-yellow-200",
        Offer: "bg-green-50 text-green-700 border-green-200",
        Rejected: "bg-red-50 text-red-700 border-red-200",
        Withdrawn: "bg-gray-50 text-gray-600 border-gray-200"
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = () => {
        setFormData({
            company: job.company,
            position: job.position,
            location: job.location,
            status: job.status,
            date_applied: job.date_applied?.split("T")[0] || "",
            job_url: job.job_url || "",
            notes: job.notes || ""
        });

        setIsEditing(true);
    };

    const handleCancel = () => {
        setFormData({
            company: job.company,
            position: job.position,
            location: job.location,
            status: job.status,
            date_applied: job.date_applied?.split("T")[0] || "",
            job_url: job.job_url || "",
            notes: job.notes || ""
        });

        setIsEditing(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.company ||
            !formData.position ||
            !formData.location ||
            !formData.date_applied
        ) {
            return;
        }

        await updateJob(job.id, formData);

        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <article className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Header */}
                    <div>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="Position"
                            className="w-full text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 focus:outline-none focus:border-gray-400"
                        />

                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="w-full mt-2 text-sm text-gray-600 border-b border-gray-200 pb-1 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-3 text-sm">

                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-location-dot w-4 text-gray-400"></i>

                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Location"
                                className="flex-1 border-b border-gray-200 pb-1 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                            />
                        </div>

                        {/* Date + Status */}
                        <div className="flex items-center gap-2">
                            <i className="fa-regular fa-calendar w-4 text-gray-400"></i>

                            <input
                                type="date"
                                name="date_applied"
                                value={formData.date_applied}
                                onChange={handleChange}
                                className="flex-1 border-b border-gray-200 pb-1 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                            />

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="border border-gray-200 rounded-md px-2 py-1 text-xs bg-white focus:outline-none focus:border-gray-400"
                            >
                                <option value="Applied">Applied</option>
                                <option value="Interview">Interview</option>
                                <option value="Offer">Offer</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Withdrawn">Withdrawn</option>
                            </select>
                        </div>
                    </div>

                    {/* Job URL */}
                    <input
                        type="url"
                        name="job_url"
                        value={formData.job_url}
                        onChange={handleChange}
                        placeholder="Job posting URL"
                        className="w-full border-b border-gray-200 pb-1 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                    />

                    {/* Notes */}
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Notes"
                        rows="2"
                        className="w-full border-b border-gray-200 pb-1 text-sm text-gray-600 resize-none focus:outline-none focus:border-gray-400"
                    />

                    {/* Actions */}
                    <div className="flex items-center justify-start gap-2 pt-2 border-t border-gray-100">
                    
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Save
                        </button>

                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </article>
        );
    }

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
                        onClick={handleEdit}
                        className={`text-sm text-gray-500 hover:text-gray-900 transition-colors ${showAction ? "block" : "hidden"}`}
                        aria-label="Edit job"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <button
                        onClick={() => deleteJob(job.id)}
                        className={`text-sm text-gray-500 hover:text-red-600 transition-colors ${showAction ? "block" : "hidden"}`}
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

            {/* Notes */}
            {job.notes && (
                <p className="mt-4 text-sm text-gray-500 line-clamp-2">
                    {job.notes}
                </p>
            )}

        </article>
    );
}

export default JobCard;