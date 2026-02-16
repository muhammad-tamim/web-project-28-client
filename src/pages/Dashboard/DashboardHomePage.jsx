import React from 'react';
import PagesBanner from '../../components/layouts/PagesBanner';
import MaxWidth from '../../components/MaxWidth';
import LoadingSpinner from '../../components/LoadingSpinner';
import useGetUser from '../../hooks/queries/users/usegetUser';
import useAuth from '../../hooks/useAuth';
import CustomerStatistics from '../../components/dashboard/DashboardHomePage/Customer/CustomerStatistics';
import SellerStatistics from '../../components/dashboard/DashboardHomePage/Seller/SellerStatistics';
import AdminStatistics from '../../components/dashboard/DashboardHomePage/Admin/AdminStatistics';

const DashboardHomePage = () => {
    const { user, loading } = useAuth()

    const { data, isLoading, isError, error } = useGetUser(user?.email);


    if (isLoading || loading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }


    return (
        <div>
            {/* <PagesBanner pageName={'rentax'} title={`${data.role} dashboard`}></PagesBanner> */}
            <MaxWidth>
                <div className='space-y-20 my-10'>
                    {data?.role === 'customer' && <CustomerStatistics></CustomerStatistics>}
                    {data?.role === 'seller' && <SellerStatistics></SellerStatistics>}
                    {data?.role === 'admin' && <AdminStatistics></AdminStatistics>}
                </div>
            </MaxWidth>
        </div>
    );
};

export default DashboardHomePage;