import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AvailableCarsPage from "../pages/AvailableCarsPage";
import ErrorPage from "../pages/ErrorPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import MyBookings from "../pages/MyBookings";
import MyCars from "../pages/MyCars";
import AddCar from "../pages/AddCar";
import CarDetailsPage from "../pages/CarDetailsPage";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../components/ErrorElement";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/about',
                Component: AboutPage
            },
            {
                path: '/contact',
                Component: ContactPage
            },
            {
                path: '/available-cars',
                Component: AvailableCarsPage,
            },
            {
                path: '/car-details/:id',
                Component: CarDetailsPage
            },
            {
                path: '/add-car',
                element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: '/my-cars',
                element: <PrivateRoute><MyCars></MyCars></PrivateRoute>
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/sign-up',
                Component: SignUpPage
            },
            {
                path: '/sign-in',
                Component: SignInPage
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])
