import { NasaImageCardProps } from "../../componentsType/propsTypes";
import { useNasaAsset } from "../../hooks/useNasaAsset";
import "./NasaImageCard.scss";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  const { nasaAssetResult, loadingNasaAssetResult, errorNasaAssetResult } =
    useNasaAsset(nasaImage?.nasa_id);
  const handleLike = () => console.log("Like!", nasaImage?.nasa_id);

  return (
    <article id={nasaImage?.nasa_id} className="card">
      <div className="card__header">
        <p className="card__photographer">
          {nasaImage?.photographer
            ? nasaImage?.photographer
            : nasaImage?.secondary_creator}
        </p>
        {loadingNasaAssetResult ? <p>Loading image</p> : null}
        <button className="card__button" onClick={handleLike}>
          L
        </button>
      </div>
      <div className="card__body">
        {errorNasaAssetResult ? <p>{errorNasaAssetResult.message}</p> : null}
        {nasaAssetResult?.collection?.items ? (
          <img
            className="card__image"
            src={nasaAssetResult?.collection?.items[1]?.href}
            alt={`Image ${nasaImage.title}`}
          />
        ) : null}
      </div>
      <div className="card__footer">
        <h3 className="card__title">{nasaImage?.title}</h3>
        <p className="card__date">{nasaImage?.date_created}</p>
      </div>
    </article>
  );
};
