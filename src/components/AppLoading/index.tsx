import { AppCircleLoader } from "../AppCircleLoader";
import "./AppLoading.scss";

export const AppLoading = () => {
  return (
    <section className="loading">
      <AppCircleLoader />
    </section>
  );
};
