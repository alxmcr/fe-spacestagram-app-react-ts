import { NasaImageCardProps } from "../../componentsType/propsTypes";
import { useNasaAsset } from "../../hooks/useNasaAsset";
import "./NasaImageCard.scss";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  const { nasaAssetResult, loadingNasaAssetResult, errorNasaAssetResult } =
    useNasaAsset(nasaImage?.nasa_id);

  return (
    <article id={nasaImage?.nasa_id} className="card">
      {loadingNasaAssetResult ? <p>Loading image</p> : null}
      {errorNasaAssetResult ? <p>{errorNasaAssetResult.message}</p> : null}
      {nasaAssetResult?.collection?.items ? (
        <img
          className="card__image"
          src={nasaAssetResult?.collection?.items[0].href}
          alt={`Image ${nasaImage.title}`}
        />
      ) : null}
      <p className="card__photographer">{nasaImage?.photographer}</p>
      <h3 className="card__title">{nasaImage?.title}</h3>
      <p className="card__location">{nasaImage?.location}</p>
      <p className="card__description">{nasaImage?.description}</p>
    </article>
  );
};
