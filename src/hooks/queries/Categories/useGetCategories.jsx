import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { categoriesApi } from '../../../api/categories.api';

const useGetCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: categoriesApi.getAll
    })
};

export default useGetCategories;