import routerContants from "./routeConstants";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const history = createBrowserHistory();
const routers = Object.values(routerContants);
export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                {routers.map((router) => {
                    console.log(router)
                    return (
                        <Route
                            path={router.route}
                            exact
                            component={router.container}
                        />
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
}