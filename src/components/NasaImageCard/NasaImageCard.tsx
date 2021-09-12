import { NasaImageCardProps } from "../../componentsType/propsTypes";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  return (
    <article id={nasaImage.nasa_id}>
      <h3 className="card__title"></h3>
    </article>
  );
};
