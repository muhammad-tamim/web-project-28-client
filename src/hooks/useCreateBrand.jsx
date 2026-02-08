import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { brandsApi } from '../api/brands.api';

const useCreateBrand = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: brandsApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(["brands"]);
        }
    })
};

export default useCreateBrand;