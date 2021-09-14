import { useContext, useState } from "react";
import { NasaImageCardProps } from "../../componentsType/propsTypes";
import { LikesContext } from "../../context/LikesContext";
import { timeAgo } from "../../helpers/helperDates";
import { isLikedImage } from "../../helpers/helperLocalStorage";
import { useNasaAsset } from "../../hooks/useNasaAsset";
import { HeartIcon } from "../../icons/HeartIcon";
import { AppLoading } from "../AppLoading";
import "./NasaImageCard.scss";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  const { nasa_id } = nasaImage;
  const likesValue = useContext(LikesContext);
  const { state, dispatch } = likesValue;
  const isLiked = isLikedImage(nasa_id, state?.nasaIds);
  const [liked, setLiked] = useState<boolean>(isLiked);
  const { nasaAssetResult, loadingNasaAssetResult, errorNasaAssetResult } =
    useNasaAsset(nasa_id);

  const handleLike = () => {
    setLiked(true);
    dispatch({ type: "LIKE", payload: nasa_id });
  };

  const handleUnlike = () => {
    setLiked(false);
    dispatch({ type: "UNLIKE", payload: nasa_id });
  };

  return (
    <article id={nasaImage?.nasa_id} className="card">
      <div className="card__header">
        <p className="card__photographer">NASA</p>
        {loadingNasaAssetResult ? <AppLoading /> : null}
      </div>
      <div className="card__body">
        {errorNasaAssetResult ? <p>{errorNasaAssetResult.message}</p> : null}
        {nasaAssetResult?.collection?.items ? (
          <img
            className="card__image"
            src={nasaAssetResult?.collection?.items[1]?.href}
            alt={`Image ${nasaImage.title}`}
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="card__actions">
        {liked ? (
          <button className="card__button" onClick={handleUnlike}>
            <HeartIcon
              className="icon--liked"
              fill="#FF346E"
              stroke="#FF346E"
            />
          </button>
        ) : (
          <button className="card__button" onClick={handleLike}>
            <HeartIcon className="icon" fill="#fff" stroke="#000" />
          </button>
        )}
      </div>
      <div className="card__footer">
        <h3 className="card__title">{nasaImage?.title}</h3>
        <p className="card__description">{nasaImage?.description}</p>
        <p className="card__date">{timeAgo(nasaImage?.date_created)}</p>
      </div>
    </article>
  );
};
