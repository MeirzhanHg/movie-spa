import { useAuth } from "../../../../../hooks/useAuth";
import { getAdminHomeUrl } from "../../../../../config/url.config";

import MenuItem from "../MenuItem";
import LogoutButton from "./LogoutButton";

const AuthItems = () => {
   const { user } = useAuth();

   return (
      <>
         {user ? (
            <>
               <MenuItem
                  item={{
                     icon: "MdSettings",
                     link: "/profile",
                     title: "Профиль",
                  }}
               />
               <LogoutButton />
            </>
         ) : (
            <MenuItem
               item={{ icon: "MdLogin", link: "/auth", title: "Кіру" }}
            />
         )}

         {user?.isAdmin && (
            <MenuItem
               item={{
                  icon: "MdOutlineLock",
                  link: getAdminHomeUrl(),
                  title: "Әкімші панелі",
               }}
            />
         )}
      </>
   );
};

export default AuthItems;
