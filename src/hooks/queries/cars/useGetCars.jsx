import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCars = (page, limit = 9) => {
    return useQuery({
        queryKey: ['cars', page, limit],
        queryFn: () => carsApi.findAll(page, limit),
        keepPreviousData: true
    })
}
export default useGetCars;   