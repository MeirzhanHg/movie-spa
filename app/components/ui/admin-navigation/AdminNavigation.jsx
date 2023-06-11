import styles from "./AdminNavigation.module.scss";
import { navItems } from "./admin-navigation.data";
import AdminNavItem from "./AdminNavItem";

const AdminNavigation = () => {
   return (
      <nav className={styles.nav}>
         <ul>
            {navItems.map((item) => (
               <AdminNavItem key={item.link} item={item} />
            ))}
         </ul>
      </nav>
   );
};

export default AdminNavigation;
