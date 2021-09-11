import { useEffect, useState } from "react";
import { AstronomyImage } from "../componentsType/types";
import { appHttp } from "../helpers/appHttp";

export const useAPOD = () => {
    const [astronomyImage, setAstronomyImage] = useState<AstronomyImage | null>(null)
    const [loadingAstronomyImage, setLoadingAstronomyImage] = useState<boolean>(false);
    const [errorAstronomyImage, setErrorAstronomyImage] = useState<Error | null>(null);
    const baseURL = import.meta.env.VITE_NASA_API_BASE_URL;
    const apiKEY = import.meta.env.VITE_NASA_API_KEY;
    const url = `${baseURL}/?api_key=${apiKEY}`;

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingAstronomyImage(true)

        appHttp<AstronomyImage>(url, signal)
            .then(data => {
                setAstronomyImage(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorAstronomyImage(error)
                }
            })
            .finally(() => setLoadingAstronomyImage(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { astronomyImage, loadingAstronomyImage, errorAstronomyImage };
}