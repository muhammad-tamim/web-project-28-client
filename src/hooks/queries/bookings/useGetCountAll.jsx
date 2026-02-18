import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetCountAll = () => {
    return useQuery({
        queryKey: ['bookings'],
        queryFn: () => bookingsApi.countAll()
    })
};

export default useGetCountAll;