import { useRouter } from "next/router";

import styles from "./AdminActions.module.scss";
import MaterialIcon from "../../../MaterialIcon";

const AdminActions = ({ editUrl, removeHandler }) => {
   const { push } = useRouter();

   return (
      <div className={styles.actions}>
         <button onClick={() => push(editUrl)}>
            <MaterialIcon name="MdEdit" />
         </button>
         <button onClick={removeHandler}>
            <MaterialIcon name="MdClose" />
         </button>
      </div>
   );
};

export default AdminActions;
