import styles from "./Favorites.module.scss";
import FavoriteButton from "../single-movie/FavoriteButton/FavoriteButton";
import Link from "next/link";
import { getMovieUrl } from "../../../config/url.config";
import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";

const FavoriteItem = ({ movie }) => {
   const { user } = useAuth();
   return (
      <div className={styles.itemWrapper}>
         {user && <FavoriteButton movieId={movie._id} />}
         <Link href={getMovieUrl(movie.slug)} className={styles.item}>
            <Image
               alt={movie.title}
               src={movie.bigPoster}
               layout="fill"
               draggable={false}
               priority
            />
         </Link>
         <div className={styles.title}>{movie.title}</div>
      </div>
   );
};

export default FavoriteItem;
