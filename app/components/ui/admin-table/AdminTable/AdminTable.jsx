import AdminTableHeader from "./AdminTableHeader";
import SkeletonLoader from "../../SkeletonLoader";
import AdminTableItem from "./AdminTableItem";

import styles from "./AdminTable.module.scss";

const AdminTable = ({ headerItems, isLoading, removeHandler, tableItems }) => {
   return (
      <div>
         <AdminTableHeader headerItems={headerItems} />

         {isLoading ? (
            <SkeletonLoader count={1} height={48} className="mt-4" />
         ) : tableItems.length ? (
            tableItems.map((tableItem) => (
               <AdminTableItem
                  key={tableItem._id}
                  removeHandler={() => removeHandler(tableItem._id)}
                  tableItem={tableItem}
               />
            ))
         ) : (
            <div className={styles.notFound}>Элементтер табылмады</div>
         )}
      </div>
   );
};

export default AdminTable;
