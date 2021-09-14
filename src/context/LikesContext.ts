import React from "react";
import { LikesAction, LikesState } from "../reducers/likesReducer";

const initialLikesState: LikesState = {
    nasaIds: []
}

export const LikesContext = React.createContext<{
    state: LikesState
    dispatch: React.Dispatch<LikesAction>
}>({
    state: initialLikesState,
    dispatch: () => undefined,
});