import { useQuery } from "react-query";
import { MovieService } from "../../../../../services/movie.service";
import SubHeading from "../../../../ui/heading/SubHeading";
import SkeletonLoader from "../../../../ui/SkeletonLoader";
import Link from "next/link";
import { getMovieUrl } from "../../../../../config/url.config";
import cn from "classnames";
import Image from "next/image";

import styles from "../Admin.module.scss";

const PopularMovie = () => {
   const { isLoading, data: movie } = useQuery(
      "Most popular movie in admin",
      () => MovieService.getMostPopularMovies(),
      {
         select: (data) => data[0],
      }
   );

   return (
      <div className={cn(styles.block, styles.popular)}>
         <SubHeading title="Ең танымал фильм" />
         {isLoading ? (
            <SkeletonLoader className="h-48" />
         ) : (
            movie && (
               <>
                  <h3>{movie.countOpened} рет қаралды</h3>
                  <Link href={getMovieUrl(movie.slug)}>
                     <Image
                        width={285}
                        height={176}
                        src={movie.bigPoster}
                        alt={movie.title}
                        className={styles.image}
                        unoptimized
                     />
                  </Link>
               </>
            )
         )}
      </div>
   );
};

export default PopularMovie;
