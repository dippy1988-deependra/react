
import Contant from './components/Content'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
const routerContants = {
    contant: {
        route: "/",
        container: Contant,
    },
    home: {
        route: "home",
        container: Home,
    },
    about: {
        route: "/about",
        container: About,
    },
    services: {
        route: "/services",
        container: Services,
    },
    gallery: {
        route: "/gallery",
        container: Gallery,
    },
};
export default routerContants;