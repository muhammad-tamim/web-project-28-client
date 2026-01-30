import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = use(AuthContext)

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <Navigate to="/sign-in" state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;