import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCarsByCategory = (category, page, limit = 9) => {
    return useQuery({
        queryKey: ['cars-category', category, page, limit],
        queryFn: () => carsApi.findAllByCategory(category, page, limit),
        keepPreviousData: true
    })
};

export default useGetCarsByCategory;