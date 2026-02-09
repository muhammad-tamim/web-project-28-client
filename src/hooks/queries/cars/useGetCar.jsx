import React from 'react';
import { carsApi } from '../../../api/cars.api';
import { useQuery } from '@tanstack/react-query';

const useGetCar = (id) => {
    return useQuery({
        queryKey: ['cars', id],
        queryFn: () => carsApi.findOne(id),
        enabled: !!id,
    })
};

export default useGetCar;