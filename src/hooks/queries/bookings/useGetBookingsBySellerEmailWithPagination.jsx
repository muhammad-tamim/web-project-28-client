import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetBookingsBySellerEmailWithPagination = (email, page, limit) => {
    return useQuery({
        queryKey: ['bookings', email, page, limit],
        queryFn: () => bookingsApi.findAllBySellerEmailWithPagination(email, page, limit),
        keepPreviousData: true
    })
};

export default useGetBookingsBySellerEmailWithPagination;