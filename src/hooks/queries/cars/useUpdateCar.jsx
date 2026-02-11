import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useUpdateCar = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => carsApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries(["cars"]);
            queryClient.invalidateQueries(["cars", id]);
        },
    });
};

export default useUpdateCar;