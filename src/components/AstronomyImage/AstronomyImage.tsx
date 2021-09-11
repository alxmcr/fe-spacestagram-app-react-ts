import { useAPOD } from "../../hooks/useAPOD"

export const AstronomyImage = () => {
    const {astronomyImage, loadingAstronomyImage, errorAstronomyImage} = useAPOD();

    if (errorAstronomyImage) return <p>There was an error.</p>

    return (
        <>
            {
                loadingAstronomyImage ? (
                    <p>Loading...</p>
                ) : (
                    <article>
                        <img 
                            src={astronomyImage?.url} 
                            alt={astronomyImage?.title} 
                        />
                    </article>
                )
            }
        </>
    )
}