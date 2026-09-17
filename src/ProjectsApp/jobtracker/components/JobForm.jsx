function JobForm({
    formData,
    handleChange,
    handleSubmit
}) {
    return (
        <div className="bg-white">

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Details of the Application
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    Add the details of a job you're applying for.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

                {/* Company */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                    </label>

                    <input
                        type="text"
                        name="company"
                        placeholder="e.g. Accenture"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-500"
                    />
                </div>

                {/* Position */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position
                    </label>

                    <input
                        type="text"
                        name="position"
                        placeholder="e.g. Frontend Developer"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-500"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                    </label>

                    <input
                        type="text"
                        name="location"
                        placeholder="e.g. Makati"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-500"
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                    </label>

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none focus:border-gray-500"
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Withdrawn">Withdrawn</option>
                    </select>
                </div>

                {/* Date Applied */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date Applied
                    </label>

                    <input
                        type="date"
                        name="date_applied"
                        value={formData.date_applied}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-500"
                    />
                </div>

                {/* Job URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job URL
                    </label>

                    <input
                        type="url"
                        name="job_url"
                        placeholder="https://..."
                        value={formData.job_url}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-gray-500"
                    />
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Notes
                    </label>

                    <textarea
                        name="notes"
                        placeholder="Add any notes about this application..."
                        value={formData.notes}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none resize-y focus:border-gray-500"
                    />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex justify-start pt-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Add Application
                    </button>
                </div>

            </form>
        </div>
    );
}

export default JobForm;