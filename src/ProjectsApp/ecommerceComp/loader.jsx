function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-[#f7f7f5]/90 px-4 backdrop-blur-sm">
            <div className="flex flex-col items-center">
                <div className="relative h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-200" />

                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600" />
                </div>

                <p className="mt-5 text-sm font-medium text-neutral-500 animate-pulse">
                    Loading... This may take a few seconds.
                </p>
            </div>
        </div>
    );
}

export default Loader;