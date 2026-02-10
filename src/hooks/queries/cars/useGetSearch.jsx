import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetSearch = (brand, category, sort, page) => {
    return useQuery({
        queryKey: ['cars-search', brand, category, sort, page],
        queryFn: () => carsApi.search(brand, category, sort, page),
        keepPreviousData: true,
    })
};

export default useGetSearch;