import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetBookingsBySellerEmail = (email) => {
    return useQuery({
        queryKey: ['bookings', email],
        queryFn: () => bookingsApi.findAllBySellerEmail(email),
        enabled: !!email
    })
};

export default useGetBookingsBySellerEmail;