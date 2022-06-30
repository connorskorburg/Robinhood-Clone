import { useState, ChangeEvent } from "react";
import { useStockContext } from "../../context";

const Search = (): JSX.Element => {
  const { updateTicker } = useStockContext();
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    Array<DashboardTypes.SearchResultItem>
  >([]);

  const fetchTickers = (query: string) => {
    fetch(
      `${process.env.REACT_APP_IEX_CLOUD_API_BASE_URL}search/${query}?token=${process.env.REACT_APP_IEX_CLOUD_API_KEY}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const results: Array<DashboardTypes.SearchResultItem> = [];
        data.forEach(({ symbol, name }: DashboardTypes.SearchResultItem) => {
          results.push({ symbol, name });
        });
        setSearchResults(results);
      })
      .catch((error) => new Error(error));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
    e.target.value && fetchTickers(e.target.value);
  };

  const handleResultsItemClick = (symbol: string, name: string) => {
    updateTicker(symbol, name);
    setQuery("");
    setSearchResults([]);
  };

  return (
    <div className="search">
      <label htmlFor="search">
        <i className="fa-solid fa-magnifying-glass" />
      </label>
      <input
        onChange={(e) => handleInputChange(e)}
        id="search"
        type="text"
        placeholder="Search"
        defaultValue={query}
      />
      {!!searchResults.length && (
        <div className="search-results">
          {searchResults.map(
            ({ symbol, name }: DashboardTypes.SearchResultItem, idx) => (
              <section
                key={idx}
                onClick={() => handleResultsItemClick(symbol, name)}
              >
                {`${symbol} - ${name}`}
              </section>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
