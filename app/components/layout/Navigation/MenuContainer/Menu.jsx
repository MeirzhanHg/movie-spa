import dynamic from "next/dynamic";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem.jsx";

const DynamicAuthItems = dynamic(() => import("./auth/AuthItems"), {
   ssr: false,
});

const Menu = ({ menu: { items, title } }) => {
   return (
      <div className={styles.menu}>
         <div className={styles.heading}>{title}</div>
         <ul className={styles.ul}>
            {items.map((item) => (
               <MenuItem key={item.link} item={item} />
            ))}
            {title === "Басқару" ? <DynamicAuthItems /> : null}
         </ul>
      </div>
   );
};

export default Menu;
