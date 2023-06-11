import Catalog from "../app/components/ui/catalog-movie/Catalog";
import { MovieService } from "../app/services/movie.service";

const FreshPage = ({ movies }) => {
   return (
      <Catalog
         movies={movies || []}
         title="Жаңа фильмдер"
         description="Тамаша сападағы жаңа фильмдер мен сериалдар: заңды, қауіпсіз, жарнамасыз"
      />
   );
};

export const getStaticProps = async () => {
   try {
      const { data: movies } = await MovieService.getAll();

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

export default FreshPage;