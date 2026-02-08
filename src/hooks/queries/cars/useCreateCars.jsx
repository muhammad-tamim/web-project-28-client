import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useCreateCars = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: carsApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['cars'])
        }
    })
};

export default useCreateCars;