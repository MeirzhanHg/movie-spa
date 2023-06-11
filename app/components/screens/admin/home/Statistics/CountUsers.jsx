import { AdminService } from "../../../../../services/admin.service";
import cn from "classnames";
import { useQuery } from "react-query";

import SkeletonLoader from "../../../../ui/SkeletonLoader";

import styles from "../Admin.module.scss";

const CountUsers = () => {
   const { isLoading, data: response } = useQuery("Count users", () =>
      AdminService.getCountUsers()
   );

   return (
      <div className={cn(styles.block, styles.countUsers)}>
         <div>
            {isLoading ? (
               <SkeletonLoader />
            ) : (
               <div className={styles.number}>{response?.data}</div>
            )}
            <div className={styles.description}>пайдаланушылар</div>
         </div>
      </div>
   );
};

export default CountUsers;
