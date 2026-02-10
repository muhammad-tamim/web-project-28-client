import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useUpdateBooking = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => bookingsApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries(["bookings"]);
            queryClient.invalidateQueries(["bookings", id]);
        },
    });
};

export default useUpdateBooking;