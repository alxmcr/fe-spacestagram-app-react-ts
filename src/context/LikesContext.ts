import React from "react";
import { LikesAction, LikesState } from "../reducers/likesReducer";

const initialLikesState: LikesState = {
    nasaIds: []
}

export interface LikesContextProps {
    state: LikesState
    dispatch: React.Dispatch<LikesAction>
}

export const LikesContext = React.createContext<LikesContextProps>({
    state: initialLikesState,
    dispatch: () => undefined,
});