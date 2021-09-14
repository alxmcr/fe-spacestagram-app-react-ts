import { Reducer } from "react";

// Reducers
export interface LikesState {
    nasaIds: string[];
}

export interface LikesAction {
    type: "LIKE" | "UNLIKE",
    payload: string
}

export const likesReducer: Reducer<LikesState, LikesAction> = (state: LikesState, action: LikesAction) => {
    let currentState = state;
    const nasaId = action?.payload;
    const currentNasaIds = state?.nasaIds;

    switch (action.type) {
        case "LIKE":
            const nasaIds = currentNasaIds.includes(nasaId)
                ? currentNasaIds
                : [...currentNasaIds, nasaId]
            const likesStateUpdated = { ...state, nasaIds }
            return likesStateUpdated
        case "UNLIKE":
            const filterCondition = (likeNasaId: string) => likeNasaId !== nasaId
            const nasaIdsFiltered = currentNasaIds.filter(filterCondition);
            const unlikesStateUpdated = { ...state, nasaIds: nasaIdsFiltered };
            return unlikesStateUpdated;
        default:
            return currentState;
    }
}