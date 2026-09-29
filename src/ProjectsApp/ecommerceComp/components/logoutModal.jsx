
function LogoutModal( { setShowModal, logoutUser, setCart } ){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={()=>setShowModal(false)}>
            <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="grid gap-2">
                    <p className="text-xl font-semibold text-gray-900">
                        Log out?
                    </p>

                    <p className="text-sm text-gray-500">
                        Are you sure you want to log out of your account?
                    </p>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50" onClick={() =>setShowModal(false)}>
                        Cancel
                    </button>

                    <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700" onClick={() => {logoutUser(); setShowModal(false)}}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal;

