import Home from '../app/components/screens/home/Home'
import { MovieService } from '../app/services/movie.service'
import { getActorUrl, getMovieUrl } from '../app/config/url.config'
import { getGenresList } from '../app/utils/movie/getGenresList'

import { ActorService } from '../app/services/actor.service'

const HomePage = ({ slides, actors, trendingMovies }) => {
  return (
    <main>
      <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
    </main>
  )
}

export const getStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll()

    const slides = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      bigPoster: m.bigPoster,
      subTitle: getGenresList(m.genres),
      title: m.title
    }))

    const { data: dataActors } = await ActorService.getAll()

    const actors = dataActors.slice(0, 7).map(a => ({
      name: a.name,
      posterPath: a.photo,
      link: getActorUrl(a.slug),
      content: {
        title: a.name,
        subTitle: `+${a.countMovies} movies`
      }
    }))


    const dataTrendingMovies = await MovieService.getMostPopularMovies()

    const trendingMovies = dataTrendingMovies.slice(0, 7).map(m => ({
      name: m.title,
      posterPath: m.poster,
      link: getMovieUrl(m.slug)
    }))


    return {
      props: {
        slides,
        actors,
        trendingMovies
      },
      revalidate: 60
    }
  } catch (error) {
    return {
      props: {
        slides: [],
        actors: [],
        trendingMovies: []
      }
    }
  }
}

export default HomePage 