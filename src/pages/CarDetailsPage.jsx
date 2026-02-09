import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import { Link, useParams } from 'react-router';
import useGetCar from '../hooks/queries/cars/useGetCar';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogCard from '../components/Blog/BlogCard';
import { MdOutlineArrowOutward } from 'react-icons/md';
import BookingCard from '../components/CarDetails/BookingCard';
import DetailsCard from '../components/CarDetails/detailsCard';
import CarGallery from '../components/CarDetails/CarGallery';
import Accordion from '../components/CarDetails/Accordion';
import WhyBookCard from '../components/CarDetails/WhyBookCard';
import Swal from 'sweetalert2';

const CarDetailsPage = () => {
    const { id } = useParams()

    const { data: car, isLoading, error, isError } = useGetCar(id);

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    const handleBookings = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,

            buttonsStyling: false,

            confirmButtonText: "Yes, Book it",
            cancelButtonText: "Cancel",

            customClass: {
                confirmButton: "btn btn-primary mx-5 btn-lg rounded-full px-10",
                cancelButton: "btn btn-outline btn-primary btn-lg rounded-full px-10",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Booked!",
                    text: "Your car has been Booked successfully.",
                    icon: "success",

                    buttonsStyling: false,

                    customClass: {
                        confirmButton: "btn btn-primary btn-lg rounded-full px-10",
                    },
                });
            }
        });
    }

    return (
        <div>
            <PagesBanner pageName={'renax'} title={'Car Details'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <div className='md:grid grid-cols-12 gap-5 lg:gap-10 space-y-10 md:space-y-0 flex flex-col-reverse'>

                        <div className='col-span-8 space-y-10'>
                            <DetailsCard car={car}></DetailsCard>
                            <CarGallery></CarGallery>
                            <Accordion></Accordion>
                        </div>

                        <div className='col-span-4 space-y-10'>
                            <BookingCard handleBookings={handleBookings} car={car}></BookingCard>
                            <WhyBookCard></WhyBookCard>
                        </div>

                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default CarDetailsPage;