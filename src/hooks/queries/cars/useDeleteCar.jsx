import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useDeleteCar = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => carsApi.delete(id),
        onSuccess: (_, id) => {
            queryClient.invalidateQueries(['cars']);      // update list
            queryClient.invalidateQueries(['car', id]);  // clear single car cache
            queryClient.invalidateQueries(['cars-recent']);
        },
    });
};

export default useDeleteCar;