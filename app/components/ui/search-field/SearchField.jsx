import styles from "./SearchField.module.scss";
import MaterialIcon from "../MaterialIcon";

const SearchField = ({ searchTerm, handleSearch }) => {
   return (
      <div className={styles.search}>
         <MaterialIcon name="MdSearch" />
         <input
            placeholder="Іздеу"
            value={searchTerm}
            onChange={handleSearch}
         />
      </div>
   );
};

export default SearchField;
