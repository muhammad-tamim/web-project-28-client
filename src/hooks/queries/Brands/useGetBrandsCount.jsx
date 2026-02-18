import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { brandsApi } from '../../../api/brands.api';

const useGetBrandsCount = () => {
    return useQuery({
        queryKey: ['brands', 'count'],
        queryFn: () => brandsApi.countAll()
    })
};

export default useGetBrandsCount;