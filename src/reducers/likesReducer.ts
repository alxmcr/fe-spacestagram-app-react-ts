import { LikeState, LikeAction } from '../componentsType/types'

export const likesReducer = (state: LikeState, action: LikeAction) => {
    console.log({ action });

    let currentState = state;
    const nasaId = action?.payload;
    const currentNasaIds = state?.nasaIds
    switch (action.type) {
        case "LIKE":
            const nasaIds = currentNasaIds.includes(nasaId)
                ? currentNasaIds
                : [...currentNasaIds, nasaId]

            return { ...state, nasaIds }
        case "UNLIKE":
            const filterCondition = (likeNasaId: string) => likeNasaId !== nasaId
            const nasaIdsFiltered = currentNasaIds.filter(filterCondition);

            return { ...state, nasaIds: nasaIdsFiltered }
        default:
            return currentState;
    }
}