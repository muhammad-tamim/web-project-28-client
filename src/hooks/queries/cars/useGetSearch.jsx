import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetSearch = (brand, category, sort, page, limit = 9) => {
    return useQuery({
        queryKey: ['cars-search', brand, category, sort, page, limit],
        queryFn: () => carsApi.search(brand, category, sort, page, limit),
        keepPreviousData: true,
    })
};

export default useGetSearch;