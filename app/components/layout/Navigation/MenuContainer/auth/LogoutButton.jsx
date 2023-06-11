import MaterialIcon from "../../../../ui/MaterialIcon";
import { useActions } from "../../../../../hooks/useActions";

const LogoutButton = () => {
   const { logout } = useActions();

   const handleLogout = (e) => {
      e.preventDefault();
      logout();
   };

   return (
      <li>
         <a onClick={handleLogout}>
            <MaterialIcon name="MdLogout" />
            <span>Шығу</span>
         </a>
      </li>
   );
};

export default LogoutButton;
