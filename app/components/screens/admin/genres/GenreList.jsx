import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader";
import Heading from "../../../ui/heading/Heading";
import Meta from "../../../../utils/meta/Meta";
import { useGenres } from "./useGenres";
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable";

const GenreList = () => {
   const {
      handleSearch,
      isLoading,
      searchTerm,
      deleteAsync,
      data,
      createAsync,
   } = useGenres();

   return (
      <Meta title="Genres">
         <AdminNavigation />
         <Heading title="Жанрлар" />

         <AdminHeader
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            onClick={createAsync}
         />
         <AdminTable
            isLoading={isLoading}
            removeHandler={deleteAsync}
            headerItems={["Атауы"]}
            tableItems={data || []}
         />
      </Meta>
   );
};

export default GenreList;
