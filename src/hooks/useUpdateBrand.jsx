import { QueryClient, useMutation } from '@tanstack/react-query';
import React from 'react';
import { brandsApi } from '../api/brands.api';

const useUpdateBrand = () => {
    return useMutation({
        mutationFn: ({ id, data }) => brandsApi.update(id, data),
        onSuccess: () => {
            QueryClient.invalidateQueries({ queryKey: ["brands"] });
        },
    });
};

export default useUpdateBrand;