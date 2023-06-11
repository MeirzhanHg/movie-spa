import { MovieService } from "../../app/services/movie.service";
import Error404 from "../404";
import SingleMovie from "../../app/components/screens/single-movie/SingleMovie";
import { getMovieUrl } from "../../app/config/url.config";

const MoviePage = ({ similarMovies, movie }) => {
   return movie ? (
      <SingleMovie similarMovies={similarMovies || []} movie={movie} />
   ) : (
      <Error404 />
   );
};

export const getStaticPaths = async () => {
   try {
      const { data: movies } = await MovieService.getAll();
      const paths = movies.map((a) => ({
         params: { slug: a.slug },
      }));

      return {
         paths,
         fallback: "blocking",
      };
   } catch (e) {
      return {
         paths: [],
         fallback: false,
      };
   }
};

export const getStaticProps = async ({ params }) => {
   try {
      const { data: movie } = await MovieService.getBySlug(
         String(params?.slug)
      );

      const { data: dataSimilarMovies } = await MovieService.getByGenres(
         movie.genres.map((g) => g._id)
      );

      const similarMovies = dataSimilarMovies
         .filter((m) => m._id !== movie._id)
         .map((m) => ({
            name: m.title,
            posterPath: m.poster,
            link: getMovieUrl(m.slug),
         }));

      return {
         props: { similarMovies, movie },
         revalidate: 60,
      };
   } catch (e) {
      return {
         props: {},
      };
   }
};

export default MoviePage;
