import Link from "next/link";
import { getMovieUrl } from "../../../../config/url.config";

import styles from "./AuthPlaceholder.module.scss";

const AuthButton = ({ slug }) => {
   return (
      <Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.btn}>
         Кіру
      </Link>
   );
};

export default AuthButton;
