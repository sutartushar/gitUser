import "./searchBar.css";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search user..."
        className="searchBar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
