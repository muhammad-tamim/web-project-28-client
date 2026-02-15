import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { bookingsApi } from '../../../api/bookings.api';

const useUpdateBooking = (email) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => bookingsApi.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["bookings", email]);
        },
    });
};

export default useUpdateBooking;