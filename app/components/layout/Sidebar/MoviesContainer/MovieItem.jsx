import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "../../../ui/MaterialIcon";

import { getGenresListEach } from "../../../../utils/movie/getGenresList";

import { getGenreUrl, getMovieUrl } from "../../../../config/url.config.js";

import styles from "./MovieList.module.scss";

const MovieItem = ({ movie }) => {
   return (
      <div className={styles.item}>
         {/* Фильмге сілтеме */}
         <Link href={getMovieUrl(movie.slug)}>
            <Image
               alt={movie.title}
               width={65}
               height={97}
               src={movie.poster}
               draggable={false}
               priority
            />
         </Link>
         <div className={styles.info}>
            {/* Жанрлар тізімі */}
            <div>
               <div className={styles.title}>{movie.title}</div>
               <div className={styles.genres}>
                  {movie.genres.map(({ slug, name, _id }, idx) => (
                     <Link key={_id} href={getGenreUrl(slug)}>
                        {getGenresListEach(idx, movie.genres.length, name)}
                     </Link>
                  ))}
               </div>
            </div>
            {/* Рейтинг саны */}
            <div className={styles.rating}>
               <MaterialIcon name="MdStarRate" />
               <span>{movie.rating.toFixed(1)}</span>
            </div>
         </div>
      </div>
   );
};

export default MovieItem;
