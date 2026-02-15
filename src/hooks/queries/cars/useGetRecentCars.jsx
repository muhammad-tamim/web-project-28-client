import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetRecentCars = () => {
    return useQuery({
        queryKey: ['cars-recent'],
        queryFn: carsApi.findRecent
    })
};

export default useGetRecentCars;