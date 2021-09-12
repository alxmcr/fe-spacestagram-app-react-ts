import { useEffect, useState } from "react";
import { NasaAssetResult } from "../componentsType/types";
import { appHttp } from "../helpers/appHttp";

export const useNasaAsset = (nasa_id: string) => {
    const [nasaAssetResult, setNasaAssetResult] = useState<NasaAssetResult | null>(null)
    const [loadingNasaAssetResult, setLoadingNasaAssetResult] = useState<boolean>(false);
    const [errorNasaAssetResult, setErrorNasaAssetResult] = useState<Error | null>(null);
    const baseURL = import.meta.env.VITE_NASA_API_BASE_URL_IMAGES;
    const resource = import.meta.env.VITE_NASA_API_RESOURCE_ASSET;
    const url = `${baseURL}/${resource}/${nasa_id}`;

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingNasaAssetResult(true)

        appHttp<NasaAssetResult>(url, signal)
            .then(data => {
                setNasaAssetResult(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorNasaAssetResult(error)
                }
            })
            .finally(() => setLoadingNasaAssetResult(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { nasaAssetResult, loadingNasaAssetResult, errorNasaAssetResult };
}