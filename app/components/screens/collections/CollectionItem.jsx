import Link from "next/link";
import { getGenreUrl } from "../../../config/url.config";
import styles from "./Collections.module.scss";
import CollectionImage from "./CollectionImage";

const CollectionItem = ({ collection }) => {
   return (
      <Link href={getGenreUrl(collection.slug)} className={styles.collection}>
         <CollectionImage collection={collection} />

         <div className={styles.content}>
            <div className={styles.title}>{collection.title}</div>
         </div>
      </Link>
   );
};

export default CollectionItem;
