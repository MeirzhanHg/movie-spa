import { useRateMovie } from "./useRateMovie";
import { useAuth } from "../../../../hooks/useAuth";
import AuthButton from "../../../ui/video-player/AuthPlaceholder/AuthButton";

import StarRating from "react-star-rating-component";

import styles from "./RateMovie.module.scss";

const RateMovie = ({ id, slug }) => {
   const { user } = useAuth();

   const { handleClick, isSended, rating } = useRateMovie(id);

   return (
      <div className={styles.wrapper}>
         <h3>Сізге фильм ұнады ма?</h3>
         <p>Рейтингтер ұсыныстарды жақсартады</p>

         {user ? (
            <>
               {isSended ? (
                  <div className={styles.thanks}>Бағаңыз үшін рақмет!</div>
               ) : (
                  <StarRating
                     name="star-rating"
                     value={rating}
                     onStarClick={handleClick}
                     emptyStarColor="#4f4f4f"
                  />
               )}
            </>
         ) : (
            <AuthButton slug={slug} />
         )}
      </div>
   );
};

export default RateMovie;
