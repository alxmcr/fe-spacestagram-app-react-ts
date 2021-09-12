import { NasaImageCardProps } from "../../componentsType/propsTypes";

export const NasaImageCard = ({ nasaImage }: NasaImageCardProps) => {
  return (
    <article>
      <pre>{JSON.stringify(nasaImage)}</pre>
    </article>
  );
};
