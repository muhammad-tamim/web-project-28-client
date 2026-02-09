import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCars = (page) => {
    return useQuery({
        queryKey: ['cars', page],
        queryFn: () => carsApi.findAll(page),
        keepPreviousData: true
    })
}
export default useGetCars;