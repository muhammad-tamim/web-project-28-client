import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import CarsPage from "../pages/CarsPage";
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
import Blog from "../pages/BlogPage";
import BrandsPage from "../pages/BrandsPage";
import BrandsDetailsPage from "../pages/BrandsDetailsPage";
import TypesDetailsPage from "../pages/TypesDetailsPage";
import CategoriesPage from "../pages/CategoriesPage";

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
                path: '/brands',
                Component: BrandsPage
            },
            {
                path: '/categories',
                Component: CategoriesPage
            },
            {
                path: '/blog',
                Component: Blog
            },
            {
                path: '/contact',
                Component: ContactPage
            },
            {
                path: '/cars',
                Component: CarsPage,
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
