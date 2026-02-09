import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCarsByBrand = (brand, page) => {
    return useQuery({
        queryKey: ['brands', brand, page],
        queryFn: () => carsApi.findAllByBrand(brand, page),
        keepPreviousData: true
    })
};

export default useGetCarsByBrand;