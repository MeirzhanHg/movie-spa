import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import styles from "./AdminNavigation.module.scss";

const AdminNavItem = ({ item: { link, title } }) => {
   const { asPath } = useRouter();

   return (
      <li>
         <Link
            href={link}
            className={cn({
               [styles.active]: asPath === link,
            })}
         >
            {title}
         </Link>
      </li>
   );
};

export default AdminNavItem;
