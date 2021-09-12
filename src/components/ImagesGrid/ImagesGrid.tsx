import { ImagesGridProps } from "../../componentsType/propsTypes";
import { useNasaAssets } from "../../hooks/useNasaAssets";
import { NasaImageCard } from "../NasaImageCard/NasaImageCard";

export const ImagesGrid = ({ query = "" }: ImagesGridProps) => {
  const { nasaImageResults, loadingNasaSearchResults, errorNasaSearchResults } =
    useNasaAssets(query);
  console.log({ nasaImageResults });

  return (
    <section className="images">
      <h2 className="images__subtitle">Searching images with "{query}"</h2>
      {loadingNasaSearchResults ? <p>Loading...</p> : null}
      {errorNasaSearchResults ? <p>{errorNasaSearchResults.message}</p> : null}
      {nasaImageResults?.collection?.items !== null ? (
        <div className="images__container">
          {nasaImageResults?.collection?.items.map((imageResult) => (
            <NasaImageCard nasaImage={imageResult} key={imageResult.nasa_id} />
          ))}
        </div>
      ) : (
        <p>There aren't results.</p>
      )}
    </section>
  );
};
