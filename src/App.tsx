import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { likesReducer, LikesState } from "./reducers/likesReducer";
import { SwitchRoutesApp } from "./routing/SwitchRoutesApp";
import "./App.scss";

function App() {
  const initialLikesReducer: LikesState = { nasaIds: [] };
  const [state, dispatch] = useReducer(likesReducer, initialLikesReducer);

  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
