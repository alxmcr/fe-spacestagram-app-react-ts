import { useState } from "react";
import { ImagesSearchForm } from "../../components/ImagesSearchForm/ImagesSearchForm";
import "./HomePage.scss";

export const HomePage = () => {
  const [query, setQuery] = useState<string>("");
  const [showImages, setShowImages] = useState<boolean>(false);

  return (
    <div className="home">
      <h1 className="home__title">Spacestagram</h1>
      <h2 className="home__subtitle">Brought to you by NASA's image API</h2>
      <ImagesSearchForm
        query={query}
        setQuery={setQuery}
        setShowImages={setShowImages}
      />
      {showImages ? <p>{query}</p> : null}
    </div>
  );
};
