import { ImagesGridProps } from "../../componentsType/propsTypes";
import { useNasaAssets } from "../../hooks/useNasaAssets";

export const ImagesGrid = ({ query = "" }: ImagesGridProps) => {
  const { nasaImageResults, loadingNasaImageResults, errorNasaImageResults } =
    useNasaAssets(query);

  return (
    <section className="images">
      <h2 className="images__subtitle">Searching images with "{query}"</h2>
      {loadingNasaImageResults ? <p>Loading...</p> : null}
      {errorNasaImageResults ? <p>{errorNasaImageResults.message}</p> : null}
      {nasaImageResults !== null ? (
        <pre>{JSON.stringify(nasaImageResults)}</pre>
      ) : null}
    </section>
  );
};
