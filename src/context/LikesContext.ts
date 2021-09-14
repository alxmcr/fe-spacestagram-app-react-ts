import React from "react";
import { LikeAction, LikesState } from "../componentsType/types";

const initialLikesState: LikesState = {
    nasaIds: []
}

export const LikesContext = React.createContext<{
    state: LikesState
    dispatch: React.Dispatch<LikeAction>
}>({
    state: initialLikesState,
    dispatch: () => undefined,
});