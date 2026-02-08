import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { brandsApi } from '../../../api/brands.api';

const useGetBrands = () => {
    return useQuery({
        queryKey: ['brands'],
        queryFn: brandsApi.getAll,
    })
};

export default useGetBrands;