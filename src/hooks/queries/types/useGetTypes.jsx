import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { typesApi } from '../../../api/types.api';

const useGetTypes = () => {
    return useQuery({
        queryKey: ['types'],
        queryFn: typesApi.getAll
    })
};

export default useGetTypes;