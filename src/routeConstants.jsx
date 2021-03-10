
import Contant from './containers/Contant/Content'
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

const routerContants = {
    home: {
        route: "/home",
        container: Home,
        exact: true
    },
    about: {
        route: "/about",
        container: About,
        exact: true
    },
   
    contant: {
        route: "/",
        container: Contant,
        exact: false
    },
};
export default routerContants;