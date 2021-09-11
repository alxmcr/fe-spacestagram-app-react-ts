import { TodayImageCard } from "../../components/TodayImageCard/TodayImageCard"
import "./HomePage.scss"

export const HomePage = () => {
    return (
        <div className="home">
            <h1 className="home__title">Spacestagram</h1>
            <h2 className="home__subtitle">Brought to you by NASA's image API</h2>
            <TodayImageCard />
        </div>
    )
}