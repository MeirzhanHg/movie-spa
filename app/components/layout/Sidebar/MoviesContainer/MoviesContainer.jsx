import dynamic from "next/dynamic";
import PopularMovieList from "./PopularMovieList/PopularMovieList";

const DynamicFavoritesMovies = dynamic(
   () => import("./FavoriteMovieList/FavoriteMovieList"),
   {
      ssr: false,
   }
);

const MoviesContainer = () => {
   return (
      <div>
         <PopularMovieList />
         <DynamicFavoritesMovies />
      </div>
   );
};

export default MoviesContainer;
