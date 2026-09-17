function Loading() {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>

                <span className="text-sm">
                    Loading jobs...
                </span>
            </div>
        </div>
    );
}

export default Loading;