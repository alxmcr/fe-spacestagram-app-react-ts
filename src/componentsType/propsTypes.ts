import { ImageResult, NasaImageResult } from "./types";

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

export interface NasaImageCardProps {
    nasaImage: ImageResult
}

export interface ImagesGridProps {
    query: string;
}