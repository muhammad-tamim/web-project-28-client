import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetCountAll = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => usersApi.getCountAll()
    })
};

export default useGetCountAll;