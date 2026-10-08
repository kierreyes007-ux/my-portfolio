import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
function ProtectedRoute({children}){
    const { user, authLoading } = useAuthContext();

    if (authLoading) {
        return <LoadingScreen />;
    }

    if (!user) {
        return <Navigate to="/projects/e-commerce/login" replace />;
    }

    return children;
}

export default ProtectedRoute;