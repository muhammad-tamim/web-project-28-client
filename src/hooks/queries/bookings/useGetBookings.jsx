import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetBookings = (email) => {
    return useQuery({
        queryKey: ['bookings', email],
        queryFn: () => bookingsApi.findAll(email),
    })
}
export default useGetBookings;