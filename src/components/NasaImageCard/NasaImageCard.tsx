import { useReducer, useState } from "react";
import { NasaImageCardProps } from "../../componentsType/propsTypes";
import { LikeState } from "../../componentsType/types";
import { timeAgo } from "../../helpers/helperDates";
import { useNasaAsset } from "../../hooks/useNasaAsset";
import { HeartIcon } from "../../icons/HeartIcon";
import { likesReducer } from "../../reducers/likesReducer";
import { AppLoading } from "../AppLoading";
import "./NasaImageCard.scss";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  const { nasaAssetResult, loadingNasaAssetResult, errorNasaAssetResult } =
    useNasaAsset(nasaImage?.nasa_id);
  const initialLikesReducer: LikeState = { nasaIds: [] };
  const [state, dispatch] = useReducer(likesReducer, initialLikesReducer);
  const handleLike = () => {
    const { nasa_id } = nasaImage;
    console.log("Like!", nasa_id);
    console.log({ state });

    setLiked(!liked);
    dispatch({ type: "LIKE", payload: nasa_id });
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
        <button className="card__button" onClick={handleLike}>
          {liked ? (
            <HeartIcon
              className="icon--liked"
              fill="#FF346E"
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
