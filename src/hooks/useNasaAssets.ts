import { useEffect, useState } from "react";
import { UseNasaAssetsProps } from "../componentsType/propsTypes";
import { NasaImageResult } from "../componentsType/types";
import { appHttp } from "../helpers/appHttp";

export const useNasaAssets = (query: string) => {
    const [nasaImageResults, setNasaImageResults] = useState<NasaImageResult[]>([])
    const [loadingNasaImageResults, setLoadingNasaImageResults] = useState<boolean>(false);
    const [errorNasaImageResults, setErrorNasaImageResults] = useState<Error | null>(null);
    // Nasa API
    const apiKEY = import.meta.env.VITE_NASA_API_KEY;
    const baseURL = import.meta.env.VITE_NASA_API_BASE_URL_IMAGES;
    const resource = import.meta.env.VITE_NASA_API_BASE_URL_RESOURCE;
    // URL
    let nasaURL = new URL(`${baseURL}/${resource}`);
    let searchParams = new URLSearchParams()
    searchParams.append("q", query)
    searchParams.append("media_type", "image")
    nasaURL.search = searchParams.toString();
    const url = nasaURL.toString();

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingNasaImageResults(true)

        appHttp<NasaImageResult[]>(url, signal)
            .then(data => {
                setNasaImageResults(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorNasaImageResults(error)
                }
            })
            .finally(() => setLoadingNasaImageResults(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { nasaImageResults, loadingNasaImageResults, errorNasaImageResults };
}