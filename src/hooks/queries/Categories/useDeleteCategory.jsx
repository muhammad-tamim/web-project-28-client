import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { categoriesApi } from '../../../api/categories.api';

const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => categoriesApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories'],
                exact: false,
            });
        },
    });
};

export default useDeleteCategory;