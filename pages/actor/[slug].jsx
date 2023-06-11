import Catalog from "../../app/components/ui/catalog-movie/Catalog";
import { ActorService } from "../../app/services/actor.service";
import { MovieService } from "../../app/services/movie.service";
import Error404 from "../404";

const ActorPage = ({ movies, actor }) => {
   return actor ? (
      <Catalog movies={movies || []} title={actor.name} />
   ) : (
      <Error404 />
   );
};
export const getStaticPaths = async () => {
   try {
      const { data: actors } = await ActorService.getAll();
      const paths = actors.map((a) => ({
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
      const { data: actor } = await ActorService.getBySlug(
         String(params?.slug)
      );

      const { data: movies } = await MovieService.getByActor(actor._id);

      return {
         props: { movies, actor },
         revalidate: 60,
      };
   } catch (e) {
      return {
         props: {},
         // notFound: true,
      };
   }
};

export default ActorPage;
