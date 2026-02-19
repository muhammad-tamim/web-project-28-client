import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useCreateBookings = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ tran_id }) => bookingsApi.create(tran_id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bookings'] });
        }
    })
};

export default useCreateBookings;