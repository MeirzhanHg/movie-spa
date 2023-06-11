import cn from "classnames";

import styles from "./AdminTable.module.scss";

const AdminTableHeader = ({ headerItems }) => {
   return (
      <div className={cn(styles.item, styles.itemHeader)}>
         {headerItems.map((value) => (
            <div key={value}>{value}</div>
         ))}
         <div>Әрекеттер</div>
      </div>
   );
};

export default AdminTableHeader;
