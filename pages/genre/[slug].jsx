import Catalog from "../../app/components/ui/catalog-movie/Catalog";
import { GenreService } from "../../app/services/genre.service";
import { MovieService } from "../../app/services/movie.service";
import Error404 from "../404";

const GenrePage = ({ movies, genre }) => {
   return genre ? (
      <Catalog
         movies={movies || []}
         title={genre.name}
         description={genre.description}
      />
   ) : (
      <Error404 />
   );
};
export const getStaticPaths = async () => {
   try {
      const { data: genres } = await GenreService.getAll();
      const paths = genres.map((g) => ({
         params: { slug: g.slug },
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
      const { data: genre } = await GenreService.getBySlug(
         String(params?.slug)
      );

      const { data: movies } = await MovieService.getByGenres([genre._id]);

      return {
         props: { movies, genre },
         revalidate: 60,
      };
   } catch (e) {
      return {
         props: {},
      };
   }
};

export default GenrePage;
