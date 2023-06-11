import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader";
import Heading from "../../../ui/heading/Heading";
import Meta from "../../../../utils/meta/Meta";

import { useUsers } from "./useUsers";
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable";

const UserList = () => {
   const { handleSearch, isLoading, searchTerm, deleteAsync, data } =
      useUsers();

   return (
      <Meta title="Users">
         <AdminNavigation />
         <Heading title="Қолданушылар тізімі" />

         <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
         <AdminTable
            isLoading={isLoading}
            removeHandler={deleteAsync}
            headerItems={["Email", "Тіркелген уақыт"]}
            tableItems={data || []}
         />
      </Meta>
   );
};

export default UserList;
