import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { brandsApi } from '../../../api/brands.api';

const useDeleteBrand = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => brandsApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['brands'],
                exact: false,
            });
        },
    });
};

export default useDeleteBrand;