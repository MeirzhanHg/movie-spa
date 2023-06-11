import Catalog from "../app/components/ui/catalog-movie/Catalog";
import { MovieService } from "../app/services/movie.service";

const TrendingPage = ({ movies }) => {
   return (
      <Catalog
         movies={movies || []}
         title="Танымал фильмдер"
         description="Тамаша сападағы танымал фильмдер: заңды, қауіпсіз, жарнамасыз"
      />
   );
};

export const getStaticProps = async () => {
   try {
      const movies = await MovieService.getMostPopularMovies();

      return {
         props: {
            movies,
         },
         revalidate: 60,
      };
   } catch (error) {
      return {
         notFound: true,
      };
   }
};

export default TrendingPage;
