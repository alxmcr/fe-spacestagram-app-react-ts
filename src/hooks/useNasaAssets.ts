import { useEffect, useState } from "react";
import { NasaSearchResult } from "../componentsType/types";
import { appHttp } from "../helpers/appHttp";

export const useNasaAssets = (query: string) => {
    const [nasaImageResults, setNasaSearchResults] = useState<NasaSearchResult | null>(null)
    const [loadingNasaSearchResults, setLoadingNasaSearchResults] = useState<boolean>(false);
    const [errorNasaSearchResults, setErrorNasaSearchResults] = useState<Error | null>(null);
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

        setLoadingNasaSearchResults(true)

        appHttp<NasaSearchResult>(url, signal)
            .then(data => {
                setNasaSearchResults(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorNasaSearchResults(error)
                }
            })
            .finally(() => setLoadingNasaSearchResults(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { nasaImageResults, loadingNasaSearchResults, errorNasaSearchResults };
}