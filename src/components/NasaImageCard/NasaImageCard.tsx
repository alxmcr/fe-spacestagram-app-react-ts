import { useState } from "react";
import { NasaImageCardProps } from "../../componentsType/propsTypes";
import { timeAgo } from "../../helpers/helperDates";
import { useNasaAsset } from "../../hooks/useNasaAsset";
import { HeartIcon } from "../../icons/HeartIcon";
import "./NasaImageCard.scss";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const { nasaAssetResult, loadingNasaAssetResult, errorNasaAssetResult } =
    useNasaAsset(nasaImage?.nasa_id);
  const handleLike = () => {
    setLiked(!liked);
    console.log("Like!", nasaImage?.nasa_id);
  };

  return (
    <article id={nasaImage?.nasa_id} className="card">
      <div className="card__header">
        <p className="card__photographer">
          {nasaImage?.photographer
            ? nasaImage?.photographer
            : nasaImage?.secondary_creator}
        </p>
        {loadingNasaAssetResult ? <p>Loading image</p> : null}
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
      <div className="card__actions">
        <button className="card__button" onClick={handleLike}>
          {liked ? (
            <HeartIcon
              className="icon--liked"
              fill="#FFC3D4"
              stroke="#FF346E"
            />
          ) : (
            <HeartIcon className="icon" fill="#fff" stroke="#000" />
          )}
        </button>
      </div>
      <div className="card__footer">
        <h3 className="card__title">{nasaImage?.title}</h3>
        <p className="card__date">{timeAgo(nasaImage?.date_created)}</p>
      </div>
    </article>
  );
};
