import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useCreateBookings = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: bookingsApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['bookings'])
        }
    })
};

export default useCreateBookings;