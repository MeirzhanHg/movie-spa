import { useSearch } from "./useSearch";
import SearchList from "./searchList/SearchList";
import SearchField from "../../../ui/search-field/SearchField";

import styles from "./Search.module.scss";

const Search = () => {
   const { isSuccess, data, handleSearch, searchTerm } = useSearch();

   return (
      <div className={styles.wrapper}>
         <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
         {isSuccess && <SearchList movies={data || []} />}
      </div>
   );
};

export default Search;
