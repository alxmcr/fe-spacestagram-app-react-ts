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
                        <h3 className="astronomy__subtitle">
                            {astronomyImage?.title}
                        </h3>
                        <h4 className="astronomy__date">
                            {astronomyImage?.date}
                        </h4>
                        <p className="astronomy__explanation">
                            {astronomyImage?.explanation}
                        </p>
                        <button 
                            className="astronomy__button astronomy__button--like"
                            data-message="Like button"
                        >
                            Like
                        </button>
                    </article>
                )
            }
        </>
    )
}