
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavBar from "./components/navBar/navbar";
import Home from "./components/pages/home/home";
import MyFooter from "./components/footer/footer";
import AppartmentCenter from "./components/pages/Appartment Center/AppartmentCenter";
import Favorites from "./components/pages/Appartment Center/Yourfavorites/favorites";
import ShoppingCart from "./components/pages/shoppingcart/ShoppingCart";
import WellssMallorcasl from "./components/pages/Appartment Center/Popular10";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { defaultProtect, protect } from "./utils/Routes";
import { withoutAuthRoute } from "./utils/helper";
// import { Provider } from "react-redux";
// import store from './redux/store';
import { ToastContainer } from "react-toastify";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       {/* <Home /> */}
//       {/* <AppartmentCenter /> */}
//       {/* <Favorites /> */}
//       {/* <ShoppingCart /> */}
//       <WellssMallorcasl />
//       <MyFooter />
//     </div>
//   );
// }

function App() {
  const routing = useRoutes(protect);

  let pathName = window.location.pathname
    .toLowerCase()
    .replace(/^\/|\/$/g, "")
    .split("/");

  let checkIsWithoutAuthRoute = withoutAuthRoute.includes(
    pathName && pathName.length > 0 ? pathName[0] : "--"
  );

  const defaultRouting = useRoutes(defaultProtect);

  if (checkIsWithoutAuthRoute) {
    return <>{defaultRouting}</>;
  }
  return <>{routing}</>;
}

export default function app() {
  return (
    
    <Router>
        {/* <Provider store={store}> */}
        <ToastContainer />
        <App />
      {/* </Provider> */}
    </Router>
  );
}


