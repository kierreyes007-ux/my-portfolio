import { AlertCircle, RotateCcw } from "lucide-react";

function ErrorScreen({ error }) {
    return (
        <div className="fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-[#f7f7f5]/90 px-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-2xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                    <AlertCircle className="h-7 w-7 text-red-500" />
                </div>

                <h2 className="mt-5 text-xl font-bold tracking-tight text-neutral-950">
                    Something went wrong
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {error || "Unable to complete your request. Please try again."}
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                >
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default ErrorScreen;