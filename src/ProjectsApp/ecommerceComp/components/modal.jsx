
import { useNavigate } from "react-router-dom";

function ModalRegistration({ showModal, setShowModal }) {
    const navigate = useNavigate();

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
            onClick={() => setShowModal(false)}
        >
            <div
                className="w-full max-w-md rounded-2xl bg-white p-7 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Registration completed!
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Your account has been successfully created. Would you like to go to the login page?
                    </p>
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                        onClick={() => navigate("/projects/e-commerce/login")}
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalRegistration;
