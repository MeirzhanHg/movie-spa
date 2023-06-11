import Meta from "../../../utils/meta/Meta";
import Heading from "../../ui/heading/Heading";

import Slider from "../../ui/slider/Slider";
import SubHeading from "../../ui/heading/SubHeading";
import Gallery from "../../ui/gallery/Gallery";

const Home = ({ slides, actors, trendingMovies }) => {
   return (
      <Meta
         title="Watch movies online"
         description="Watch MovieApp movies and TV shows online or stream right to your browser."
      >
         <Heading
            title="Фильмдерді онлайн көру"
            className="text-gray-500 mb-8 text-xl"
         />
         {slides.length && <Slider slides={slides} />}

         <div className="my-10">
            <SubHeading title="Қазір тренд" />
            {trendingMovies.length && <Gallery items={trendingMovies} />}
         </div>

         <div>
            <SubHeading title="Үздік актерлер" />
            {actors.length && <Gallery items={actors} />}
         </div>
      </Meta>
   );
};

export default Home;
