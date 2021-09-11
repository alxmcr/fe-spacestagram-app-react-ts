import { useAPOD } from "../../hooks/useAPOD"
import './TodayImageCard.scss'

export const TodayImageCard = () => {
    const {astronomyImage, loadingAstronomyImage, errorAstronomyImage} = useAPOD();

    if (errorAstronomyImage) return <p>There was an error.</p>

    return (
        <>
            {
                loadingAstronomyImage ? (
                    <p>Loading...</p>
                ) : (
                    <article className="astronomy">
                        <img
                            className="astronomy__image" 
                            src={astronomyImage?.url} 
                            alt={astronomyImage?.title} 
                        />
                    </article>
                )
            }
        </>
    )
}