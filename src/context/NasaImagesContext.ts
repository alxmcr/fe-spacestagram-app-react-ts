import React from "react";
import { NasaImagesContextProps } from "../componentsType/propsTypes";

const defaultNasaImages: NasaImagesContextProps = { results: [] }

export const NasaImagesContext = React.createContext(defaultNasaImages);