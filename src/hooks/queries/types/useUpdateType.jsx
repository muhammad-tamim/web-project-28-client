import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { typesApi } from '../../../api/types.api';

const useUpdateType = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }) => typesApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries(["types"]);
            queryClient.invalidateQueries(["types", id]);
        },
    });
};

export default useUpdateType;