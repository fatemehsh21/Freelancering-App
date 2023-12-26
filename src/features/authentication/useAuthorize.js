import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  const ROLE = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };
  const desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLE).includes(desiredRole)) {
    if (user && user.role === ROLE[desiredRole]) isAuthorized = true;
  }

  return { isAuthenticated, isAuthorized, user, isLoading };
}
