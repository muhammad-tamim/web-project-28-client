import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetPremiumCars = () => {
    return useQuery({
        queryKey: ['cars-premium'],
        queryFn: carsApi.findPremium
    })
};

export default useGetPremiumCars;