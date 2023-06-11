import { useActions } from "../../hooks/useActions";
import { useAuth } from "../../hooks/useAuth";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DynamicCheckRole = dynamic(() => import("./CheckRole"), { ssr: false });

const AuthProvider = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
   const { user } = useAuth();
   const { checkAuth, logout } = useActions();
   const { pathname } = useRouter();

   useEffect(() => {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) checkAuth();
   }, []);

   useEffect(() => {
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken && user) logout();
   }, [pathname]);

   return !isOnlyAdmin && !isOnlyUser ? (
      <>{children}</>
   ) : (
      <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
         {children}
      </DynamicCheckRole>
   );
};

export default AuthProvider;
