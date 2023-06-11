import styles from "./SearchList.module.scss";
import Link from "next/link";
import { getMovieUrl } from "../../../../../config/url.config.js";
import Image from "next/image";

const SearchList = ({ movies }) => {
   return (
      <div className={styles.list}>
         {movies.length ? (
            movies.map((movie) => (
               <Link key={movie._id} href={getMovieUrl(movie.slug)}>
                  <Image
                     src={movie.poster}
                     width={50}
                     height={50}
                     alt={movie.title}
                     style={{ objectFit: "cover", objectPosition: "top" }}
                     draggable={false}
                  />
                  <span>{movie.title}</span>
               </Link>
            ))
         ) : (
            <div className="text-white text-center my-4">
               Фильмдер табылмады!
            </div>
         )}
      </div>
   );
};

export default SearchList;
