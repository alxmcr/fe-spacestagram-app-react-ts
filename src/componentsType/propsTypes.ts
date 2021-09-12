import { NasaImageResult } from "./types";

export interface NasaImagesContextProps {
    results: NasaImageResult[]
}

export interface UseNasaAssetsProps {
    query: string
}