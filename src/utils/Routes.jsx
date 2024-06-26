import { Navigate } from "react-router-dom";
import { getToken, getUserId, ischeckCoupon } from "./auth";
import Layout from "./Layout";
import LoginLayout from "./LoginLayout";
import Home from "../components/pages/home/home";
import Favorites from "../components/pages/Appartment Center/Yourfavorites/favorites";
import ShoppingCart from "../components/pages/shoppingcart/ShoppingCart";
import AppartmentCenter from "../components/pages/Appartment Center/AppartmentCenter";
import WellssMallorcasl from "../components/pages/Appartment Center/Popular10";
import Accommodation from "../components/pages/Appartment Center/Accommodation";
import Participants from "../components/pages/from/Participants";
import IBooking from "../components/pages/IBooking/IBooking";
import AttDetails from "../components/pages/Attrection/AttDetails";
import HotelLesting from "../components/pages/Appartment Center/HotelLesting";

const role = getUserId() ? getUserId()?.role : null;
const isLoggedIn = getToken();

const protects = {
  client: [
    {
      path: "/",
      element: isLoggedIn ? <Layout /> : <Navigate to="/" />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Favorites", element: <Favorites /> },

        { path: "*", element: <div>no page found</div> },
      ],
    },
  ],

  default: [
    {
      path: "/",
      element: <LoginLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Favorites", element: <Favorites /> },
        { path: "/ShoppingCart", element: <ShoppingCart /> },
        { path: "/AppartmentCenter", element: <AppartmentCenter /> },
        { path: "/top-hotels", element: <WellssMallorcasl /> },
        { path: "/hotels", element: <Accommodation /> },
        { path: "/Participants", element: <Participants /> },
        { path: "/IBooking", element: <IBooking /> },
        { path: "/attractions/:id", element: <AttDetails /> },
        { path: "/attractions", element: <HotelLesting /> },
        { path: "/attractions?search=:location", element: <HotelLesting /> },

        { path: "*", element: "No PAGE FOUNG" },
      ],
    },
  ],
};

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
