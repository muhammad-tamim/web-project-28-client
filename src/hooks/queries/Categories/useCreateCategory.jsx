import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { categoriesApi } from '../../../api/categories.api';

const useCreateCategory = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: categoriesApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(["categories"])
        }
    })
};

export default useCreateCategory;