import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCarsByBrand = (brand, page, limit = 9) => {
    return useQuery({
        queryKey: ['cars-brand', brand, page, limit],
        queryFn: () => carsApi.findAllByBrand(brand, page, limit),
        keepPreviousData: true
    })
};

export default useGetCarsByBrand;