import routerContants from "./routeConstants";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const history = createBrowserHistory();
const routers = Object.values(routerContants);
console.log({routers});
export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                {routers.map((router, index) => (
                        <Route
                            key={index}
                            path={router.route}
                            exact={router.exact}
                            component={router.container}
                        />
                )
                )}
            </Switch>
        </BrowserRouter>
    );
}