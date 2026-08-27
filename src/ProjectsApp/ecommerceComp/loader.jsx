function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="relative h-14 w-14">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500" />
                </div>

                {/* Loading text */}
                <p className="text-sm font-medium text-gray-600 animate-pulse">
                    Loading...
                </p>

            </div>
        </div>
    );
}

export default Loader;