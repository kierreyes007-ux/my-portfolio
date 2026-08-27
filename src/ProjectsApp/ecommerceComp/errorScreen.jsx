function ErrorScreen({ error }) {
    return (
        <div className="fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-white/80 backdrop-blur-sm">

            <div className="flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-xl">

                {/* Error icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <svg
                        className="h-7 w-7 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <h2 className="text-lg font-semibold text-gray-900">
                    Something went wrong
                </h2>

                <p className="text-center text-sm text-gray-500">
                    {error || "Unable to complete your request. Please try again."}
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="rounded-lg bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                >
                    Try Again
                </button>

            </div>
        </div>
    );
}

export default ErrorScreen;