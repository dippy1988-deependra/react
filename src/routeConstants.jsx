
import Contant from './containers/Contant/Content'
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Login from "./containers/Login/Login";

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
        route: "/contant",
        container: Contant,
        exact: false
    },
    login: {
        route: "/",
        container: Login,
        exact: false
    },
};
export default routerContants;