import Meta from "../../../../utils/meta/Meta";
import Statistics from "./Statistics/Statistics";
import Heading from "../../../ui/heading/Heading";
import AdminNavigation from "../../../ui/admin-navigation/AdminNavigation";

const Admin = () => {
   return (
      <Meta title="Әкімші панель">
         <AdminNavigation />
         <Heading title="Кейбір статистикалық мәліметтер" />
         <Statistics />
      </Meta>
   );
};

export default Admin;
