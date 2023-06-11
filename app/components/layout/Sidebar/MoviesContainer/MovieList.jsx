import Link from "next/link";

import MovieItem from "./MovieItem";

import styles from "./MovieList.module.scss";

const MovieList = ({ link, title, movies }) => {
   return (
      <div className={styles.list}>
         <div className={styles.heading}>{title}</div>
         {movies?.map((movie) => (
            <MovieItem key={movie._id} movie={movie} />
         ))}
         <Link href={link} className={styles.button}>
            Толығырақ көру
         </Link>
      </div>
   );
};

export default MovieList;
