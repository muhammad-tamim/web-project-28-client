import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetReport = () => {
    return useQuery({
        queryKey: ['bookings', 'report'],
        queryFn: () => bookingsApi.getReport()
    })
};

export default useGetReport;