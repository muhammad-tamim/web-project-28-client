import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useDeleteCar = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => carsApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cars'],
                exact: false,
            });
        },
    });
};

export default useDeleteCar;