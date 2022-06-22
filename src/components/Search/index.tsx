const Search = (): JSX.Element => {
  return (
    <div className="search">
      <label htmlFor="search">
        <i className="fa-solid fa-magnifying-glass" />
      </label>
      <input id="search" type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
