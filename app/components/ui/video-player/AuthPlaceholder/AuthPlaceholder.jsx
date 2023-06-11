import AuthButton from "./AuthButton";

import styles from "./AuthPlaceholder.module.scss";

const AuthPlaceholder = ({ slug }) => {
   return (
      <div className={styles.placeholder}>
         <div>
            <div>Көруді бастау үшін жүйеге кіруіңіз керек</div>
            <AuthButton slug={slug} />
         </div>
      </div>
   );
};

export default AuthPlaceholder;
