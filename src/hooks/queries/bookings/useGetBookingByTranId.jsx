import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useGetCarsByTranId = (tran_id) => {
    return useQuery({
        queryKey: ['bookings', tran_id],
        queryFn: () => bookingsApi.getByTranId(tran_id),
        enabled: !!tran_id,
    })
};

export default useGetCarsByTranId;