import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { likesReducer, LikesState } from "./reducers/likesReducer";
import { SwitchRoutesApp } from "./routing/SwitchRoutesApp";
import "./App.scss";
import { LikesContext } from "./context/LikesContext";

function App() {
  const initialLikesReducer: LikesState = { nasaIds: [] };
  const [state, dispatch] = useReducer(likesReducer, initialLikesReducer);
  const likesValue = { state, dispatch };

  return (
    <LikesContext.Provider value={likesValue}>
      <div className="App">
        <BrowserRouter>
          <SwitchRoutesApp />
        </BrowserRouter>
      </div>
    </LikesContext.Provider>
  );
}

export default App;
