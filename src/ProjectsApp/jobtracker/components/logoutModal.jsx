import { useAuthContext } from "../context/AuthContext";
function LogoutModal({ setShowLogoutModal }){
    const {logoutUser} = useAuthContext();
    return(
        <div className="bg-black/50 inset-0 fixed flex items-center justify-center z-50" onClick={() => setShowLogoutModal(false)}>
            <div className="bg-white w-full max-w-sm px-6 py-6 rounded-xl shadow-lg" onClick={(e) => e.stopPropagation()}>
                <p className="text-2xl font-semibold text-gray-900 mb-2">Log out?</p>
                <p className="text-sm text-gray-500 mb-6">Are you sure you want to logout of yourr account?</p>
                <div className="w-full flex justify-end gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50" onClick={() => setShowLogoutModal(false)}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800" onClick={() => {logoutUser(); setShowLogoutModal(false)}}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
export default LogoutModal;