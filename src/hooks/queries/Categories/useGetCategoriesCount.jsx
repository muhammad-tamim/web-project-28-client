import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { categoriesApi } from '../../../api/categories.api';

const useGetCategoriesCount = () => {
    return useQuery({
        queryKey: ['categories', 'count'],
        queryFn: () => categoriesApi.countAll()
    })
};

export default useGetCategoriesCount;