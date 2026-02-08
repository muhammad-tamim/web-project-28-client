import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCars = () => {
    return useQuery({
        queryKey: ['cars'],
        queryFn: carsApi.getAll
    })
};

export default useGetCars;