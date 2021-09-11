import { Route, Switch } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";

export function SwitchRoutesApp() {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact
            ></Route>
        </Switch>
    )
}