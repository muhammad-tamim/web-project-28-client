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
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import SearchPage from "../pages/SearchPage.";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHomePage from "../pages/Dashboard/DashboardHomePage";
import DashboardUpdateCar from "../pages/Dashboard/DashboardUpdateCar";
import ProfilePage from "../pages/Dashboard/ProfilePage";
import BookingsHistory from "../pages/Dashboard/BookingsHistory";
import NotificationPage from "../pages/Dashboard/NotificationPage";
import PaymentsHistory from "../pages/Dashboard/PaymentsHistory";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageCars from "../pages/Dashboard/ManageCars";
import ManageBrands from "../pages/Dashboard/ManageBrands";
import ManageCategories from "../pages/Dashboard/ManageCategories";
import SalesReport from "../pages/Dashboard/SalesReport";
import MySales from "../pages/Dashboard/MySales";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import PaymentCancelPage from "../pages/PaymentCancelPage";

export const Routes = createBrowserRouter([
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
                path: 'cars/search',
                Component: SearchPage
            },
            {
                path: '/brands',
                Component: BrandsPage
            },
            {
                path: '/brands-details/:brand',
                Component: BrandsDetailsPage
            },
            {
                path: '/categories',
                Component: CategoriesPage
            },
            {
                path: '/category-details/:category',
                Component: CategoryDetailsPage
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
            },
            {
                path: '/payment-success',
                Component: PaymentSuccessPage
            },
            {
                path: '/payment-cancel',
                Component: PaymentCancelPage
            }
        ]
    },
    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            // common
            {
                index: true,
                Component: DashboardHomePage
            },
            {
                path: 'profile',
                Component: ProfilePage
            },
            {
                path: 'notification',
                Component: NotificationPage
            },


            // customer
            {
                path: 'customer/bookings-history',
                element: <PrivateRoute><BookingsHistory></BookingsHistory></PrivateRoute>
            },
            {
                path: 'customer/payments-history',
                Component: PaymentsHistory
            },

            // seller
            {
                path: 'seller/add-car',
                Component: AddCar
            },
            {
                path: 'seller/my-cars',
                Component: MyCars
            },
            {
                path: 'seller/update-car/:id',
                Component: DashboardUpdateCar
            },
            {
                path: 'seller/my-sales',
                Component: MySales
            },

            // admin
            {
                path: 'admin/manage-users',
                Component: ManageUsers
            },
            {
                path: 'admin/manage-cars',
                Component: ManageCars
            },
            {
                path: 'admin/manage-brands',
                Component: ManageBrands
            },
            {
                path: 'admin/manage-categories',
                Component: ManageCategories
            },
            {
                path: 'admin/sales-report',
                Component: SalesReport
            },
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])
