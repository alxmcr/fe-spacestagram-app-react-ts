import { NasaImageCardProps } from "../../componentsType/propsTypes";
import './NasaImageCard.scss'

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  return (
    <article id={nasaImage?.nasa_id} className="card">
      <p className="card__photographer">{nasaImage?.photographer}</p>
      <h3 className="card__title">{nasaImage?.title}</h3>
      <p className="card__location">{nasaImage?.location}</p>
      <p className="card__description">{nasaImage?.description}</p>
    </article>
  );
};
