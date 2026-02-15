import React from 'react';
import { carsApi } from '../../../api/cars.api';
import { useQuery } from '@tanstack/react-query';

const useGetCar = (id) => {
    return useQuery({
        queryKey: ['car', id],
        queryFn: () => carsApi.findOne(id),
        enabled: !!id,
    })
};

export default useGetCar;