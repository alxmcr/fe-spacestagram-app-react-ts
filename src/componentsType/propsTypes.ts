import { NasaImageResult } from "./types";

export interface NasaImagesContextProps {
    results: NasaImageResult[]
}

export interface UseNasaAssetsProps {
    query: string
}

export interface ImagesSearchFormProps {
    query: string;
    setQuery: (query: string) => void;
    setShowImages: (query: boolean) => void;
}