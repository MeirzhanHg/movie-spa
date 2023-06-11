import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader";

import Heading from "../../../ui/heading/Heading";
import Meta from "../../../../utils/meta/Meta";

import { useMovies } from "./useMovies";
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable";

const MovieList = () => {
   const {
      handleSearch,
      isLoading,
      searchTerm,
      deleteAsync,
      data,
      createAsync,
   } = useMovies();

   return (
      <Meta title="Movies">
         <AdminNavigation />
         <Heading title="Фильмдер" />

         <AdminHeader
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            onClick={createAsync}
         />
         <AdminTable
            isLoading={isLoading}
            removeHandler={deleteAsync}
            headerItems={["Атауы", "Жанр", "Рейтинг"]}
            tableItems={data || []}
         />
      </Meta>
   );
};

export default MovieList;
