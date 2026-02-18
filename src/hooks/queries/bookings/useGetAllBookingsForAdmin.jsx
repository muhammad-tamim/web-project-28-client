import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetAllBookingsForAdmin = () => {
    return useQuery({
        queryKey: ['bookings'],
        queryFn: () => bookingsApi.findAllBookings()
    })
};

export default useGetAllBookingsForAdmin;