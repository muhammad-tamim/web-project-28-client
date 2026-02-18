import React from 'react';
import useGetAllBookingsForAdmin from '../../../../hooks/queries/bookings/useGetAllBookingsForAdmin';
import LoadingSpinner from '../../../LoadingSpinner';
import Card from '../Card';
import { FaMoneyBillWave, FaShoppingBag } from 'react-icons/fa';
import useGetCountAll from '../../../../hooks/queries/users/useGetCountAll';
import useGetCountAllCustomer from '../../../../hooks/queries/users/useGetCountAllCustomer';
import useGetCountAllAdmin from '../../../../hooks/queries/users/useGetCountAllAdmin';
import useGetCountAllSeller from '../../../../hooks/queries/users/useGetCountAllSeller';
import useGetAllCarsCount from '../../../../hooks/queries/cars/useGetAllCarsCount';
import useGetBrandsCount from '../../../../hooks/queries/Brands/useGetBrandsCount';
import useGetCategoriesCount from '../../../../hooks/queries/Categories/useGetCategoriesCount';
import RecentSellers from './RecentSellers';
import RecentCustomers from './RecentCustomers';

const AdminStatistics = () => {
    const { data: bookings, isLoading: bookingLoading, error: bookingError, isError: bookingIsError } = useGetAllBookingsForAdmin()
    const { data: usersCount, isLoading: usersCountLoading, error: usersCountError, isError: usersCountIsError } = useGetCountAll()
    const { data: usersCountCustomer, isLoading: usersCountCustomerLoading, error: usersCountCustomerError, isError: usersCountCustomerIsError } = useGetCountAllCustomer()
    const { data: usersCountSeller, isLoading: usersCountSellerLoading, error: usersCountSellerError, isError: usersCountSellerIsError } = useGetCountAllSeller()
    const { data: usersCountAdmin, isLoading: usersCountAdminLoading, error: usersCountAdminError, isError: usersCountAdminIsError } = useGetCountAllAdmin()
    const { data: carsCount, isLoading: carsCountLoading, error: carsCountError, isError: carsCountIsError } = useGetAllCarsCount()
    const { data: carsCountBrand, isLoading: carsCountBrandLoading, error: carsCountBrandError, isError: carsCountBrandIsError } = useGetBrandsCount()
    const { data: carsCountCategory, isLoading: carsCountCategoryLoading, error: carsCountCategoryError, isError: carsCountCategoryIsError } = useGetCategoriesCount()


    if (bookingLoading || usersCountLoading || usersCountCustomerLoading || usersCountSellerLoading || usersCountAdminLoading || carsCountLoading || carsCountBrandLoading || carsCountCategoryLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'} />;
    }

    if (bookingIsError || usersCountIsError || usersCountCustomerIsError || usersCountSellerIsError || usersCountAdminIsError || carsCountIsError || carsCountBrandIsError || carsCountCategoryIsError) {
        return <h2 className="text-red-500 text-center my-20">Error: {bookingError.message} || {usersCountError.message} || {usersCountCustomerError.message} || {usersCountSellerError.message} || {usersCountAdminError.message} || {carsCountError.message} || {carsCountBrandError.message} || {carsCountCategoryError.message}</h2>
    }

    const totalBookings = bookings?.length
    const totalSelling = bookings.reduce((sum, booking) => sum + booking.payment.amount, 0)
    const totalUser = usersCount
    const totalCustomer = usersCountCustomer
    const totalSeller = usersCountSeller
    const totalAdmin = usersCountAdmin
    const totalCars = carsCount
    const totalBrands = carsCountBrand
    const totalCategories = carsCountCategory

    return (
        <div className='space-y-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-base-300 rounded-3xl p-5 md:p-10">
                <Card title="Total Booking" value={totalBookings} icon={<FaShoppingBag className="size-6" />} />
                <Card title="Total Payments" value={`$${totalSelling}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Total Users" value={`${totalUser}`} icon={<FaMoneyBillWave className="size-6" />} />

                <Card title="Total Customer" value={`${totalCustomer}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Total Seller" value={`${totalSeller}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Total Admin" value={`${totalAdmin}`} icon={<FaMoneyBillWave className="size-6" />} />

                <Card title="Total Cars" value={`${totalCars}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Total Brands" value={`${totalBrands}`} icon={<FaMoneyBillWave className="size-6" />} />
                <Card title="Total Categories" value={`${totalCategories}`} icon={<FaMoneyBillWave className="size-6" />} />
            </div>
            <div className='bg-base-300 rounded-3xl p-5 md:p-10'>
                <RecentCustomers></RecentCustomers>
            </div>
            <div className='bg-base-300 rounded-3xl p-5 md:p-10'>
                <RecentSellers></RecentSellers>
            </div>
        </div>
    );
};

export default AdminStatistics;