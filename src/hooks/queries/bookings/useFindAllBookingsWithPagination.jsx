import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useFindAllBookingsWithPagination = (page, limit) => {
    return useQuery({
        queryKey: ['bookings'],
        queryFn: () => bookingsApi.findAllBookingsWithPagination(page, limit),
        keepPreviousData: true
    })
};

export default useFindAllBookingsWithPagination;