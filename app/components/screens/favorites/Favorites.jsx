import styles from "./Favorites.module.scss";
import Meta from "../../../utils/meta/Meta";
import Heading from "../../ui/heading/Heading";
import SkeletonLoader from "../../ui/SkeletonLoader";
import FavoriteItem from "./FavoriteItem";
import { useFavorites } from "./useFavorites";
import { useAuth } from "../../../hooks/useAuth";
import Error404 from "../../../../pages/404";
const Favorite = () => {
   const { favoriteMovies, isLoading } = useFavorites();

   const { user } = useAuth();
   if (!user) return <Error404 />;

   return (
      <Meta title="Favorites">
         <Heading title="Favorites" />

         <section className={styles.favorites}>
            {isLoading ? (
               <SkeletonLoader
                  count={3}
                  className={styles.skeletonLoader}
                  containerClassName={styles.containerLoader}
               />
            ) : (
               favoriteMovies?.map((movie) => (
                  <FavoriteItem key={movie._id} movie={movie} />
               ))
            )}
         </section>
      </Meta>
   );
};

export default Favorite;
