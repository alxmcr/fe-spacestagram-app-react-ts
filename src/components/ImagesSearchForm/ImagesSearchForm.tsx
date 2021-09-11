import { FormEvent, useState } from "react";

export const ImagesSearchForm = () => {
  const [query, setQuery] = useState<string>("");
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(query);
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
        onChange={handleQuery}
        value={query}
      />
      <button type="submit" className="search__submit">
        Search
      </button>
    </form>
  );
};
