
function Error() {
    return (
        <div className="border border-red-200 bg-red-50 rounded-lg py-8 px-4 text-center">
            <div className="flex justify-center mb-3">
                <i className="fa-solid fa-circle-exclamation text-red-500 text-xl"></i>
            </div>

            <p className="text-sm font-medium text-red-700">
                Something went wrong
            </p>

            <p className="text-sm text-red-500 mt-1">
                We couldn't load your job applications.
            </p>
        </div>
    );
}

export default Error;

