import styles from "./AdminHeader.module.scss";
import SearchField from "../../search-field/SearchField";
import AdminCreateButton from "./AdminCreateButton";

const AdminHeader = ({ onClick, handleSearch, searchTerm }) => {
   return (
      <div className={styles.header}>
         <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
         {onClick && <AdminCreateButton onClick={onClick} />}
      </div>
   );
};

export default AdminHeader;
