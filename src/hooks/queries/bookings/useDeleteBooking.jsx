import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsApi } from '../../../api/bookings.api';

const useDeleteBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => bookingsApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['bookings'],
                exact: false,
            });
        },
    });
};

export default useDeleteBooking;
