import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsApi } from '../../../api/bookings.api';

const useDeleteBooking = (email) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => bookingsApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["bookings", email]);
        },
    });
};

export default useDeleteBooking;
