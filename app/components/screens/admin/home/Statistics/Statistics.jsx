import CountUsers from "./CountUsers";
import PopularMovie from "./PopularMovie";

import styles from "../Admin.module.scss";

const Statistics = () => {
   return (
      <div className={styles.statistics}>
         <CountUsers />
         <PopularMovie />
      </div>
   );
};

export default Statistics;
