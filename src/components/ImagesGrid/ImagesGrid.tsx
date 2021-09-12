import { ImagesGridProps } from "../../componentsType/propsTypes";

export const ImagesGrid = ({ query }: ImagesGridProps) => {
  return (
    <section className="images">
      <h2 className="images__subtitle">{query}</h2>
    </section>
  );
};
