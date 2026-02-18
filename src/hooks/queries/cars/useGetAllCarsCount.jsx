import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetAllCarsCount = () => {
    return useQuery({
        queryKey: ['cars', 'count'],
        queryFn: () => carsApi.countAllCarsCount()
    })
};

export default useGetAllCarsCount;