import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import MaterialIcon from "../../../ui/MaterialIcon";

import styles from "./Menu.module.scss";

const MenuItem = ({ item }) => {
   const { asPath } = useRouter();

   return (
      <li
         className={cn({
            [styles.active]: asPath === item.link,
         })}
      >
         <Link href={item.link}>
            <MaterialIcon name={item.icon} />
            <span>{item.title}</span>
         </Link>
      </li>
   );
};

export default MenuItem;
