import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader";
import Heading from "../../../ui/heading/Heading";
import Meta from "../../../../utils/meta/Meta";

import { useActors } from "./useActors";
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable";

const ActorList = () => {
   const {
      handleSearch,
      isLoading,
      searchTerm,
      deleteAsync,
      data,
      createAsync,
   } = useActors();

   return (
      <Meta title="Actors">
         <AdminNavigation />
         <Heading title="Актерлар" />

         <AdminHeader
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            onClick={createAsync}
         />
         <AdminTable
            isLoading={isLoading}
            removeHandler={deleteAsync}
            headerItems={["Атауы", "Фильмдер саны"]}
            tableItems={data || []}
         />
      </Meta>
   );
};

export default ActorList;
