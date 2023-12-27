import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading, isVerified } =
    useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/not-access");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );
  return children;
}

export default ProtectedRoute;
