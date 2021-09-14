import { ImagesSearchFormProps } from "../../componentsType/propsTypes";
import { SearchIcon } from "../../icons/SearchIcon";
import "./ImagesSearchForm.scss"

export const ImagesSearchForm = ({
  query,
  setQuery,
  setShowImages
}: ImagesSearchFormProps) => {
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowImages(false);
  };

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowImages(true);
  };

  return (
    <form className="search" onSubmit={submitSearch}>
      <label htmlFor="query" className="search__label">
        Search:
      </label>
      <input
        id="query"
        type="search"
        className="search__query"
        placeholder="Enter your search term here"
        onChange={handleQuery}
        value={query}
        required
      />
      <button type="submit" className="search__submit">
        <SearchIcon className="icon" fill={"#a23344"}  />
      </button>
    </form>
  );
};
