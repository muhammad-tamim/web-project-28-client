import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { categoriesApi } from '../../../api/categories.api';

const useUpdateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }) => categoriesApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries(["categories"]);
            queryClient.invalidateQueries(["category", id]);
        },
    });
};

export default useUpdateCategory; 