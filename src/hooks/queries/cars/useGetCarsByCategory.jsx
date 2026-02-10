import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCarsByCategory = (category, page) => {
    return useQuery({
        queryKey: ['category', category, page],
        queryFn: () => carsApi.findAllByCategory(category, page),
        keepPreviousData: true
    })
};

export default useGetCarsByCategory;