import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { brandsApi } from '../api/brands.api';

const useUpdateBrand = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => brandsApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries(["brands"]);
            queryClient.invalidateQueries(["brand", id]);
        },
    });
};

export default useUpdateBrand;