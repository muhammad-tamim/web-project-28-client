import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { typesApi } from '../../../api/types.api';

const useCreateType = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: typesApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(["types"])
        }
    })
};

export default useCreateType;