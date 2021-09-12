import { FormEvent, useState } from "react";
import { ImagesSearchFormProps } from "../../componentsType/propsTypes";

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
        onChange={handleQuery}
        value={query}
      />
      <button type="submit" className="search__submit">
        Search
      </button>
    </form>
  );
};
