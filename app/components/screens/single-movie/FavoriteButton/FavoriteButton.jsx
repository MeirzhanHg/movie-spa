import { useEffect, useState } from "react";

import { useFavorites } from "../../favorites/useFavorites";
import { useMutation } from "react-query";
import { toastError } from "../../../../utils/toast-error";
import { UserService } from "../../../../services/user.service";

import styles from "./FavoriteButton.module.scss";
import cn from "classnames";

const FavoriteButton = ({ movieId }) => {
   const [isSmashed, setIsSmashed] = useState(false);

   const { favoriteMovies, refetch } = useFavorites();

   useEffect(() => {
      if (!favoriteMovies) return;

      const isHasMovie = favoriteMovies.some((f) => f._id === movieId);
      if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
   }, [favoriteMovies, isSmashed, movieId]);

   const { mutateAsync } = useMutation(
      "update favorites",
      () => UserService.toggleFavorite(movieId),
      {
         onError: (error) => {
            toastError(error, "Update user");
         },

         onSuccess() {
            setIsSmashed(!isSmashed);
            refetch();
         },
      }
   );

   return (
      <button
         onClick={() => mutateAsync()}
         className={cn(styles.button, {
            [styles.animate]: isSmashed,
         })}
         style={{ backgroundImage: `url('/heart-animation.png')` }}
      ></button>
   );
};

export default FavoriteButton;
