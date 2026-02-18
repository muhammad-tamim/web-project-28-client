import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetCountAllAdmin = () => {
    return useQuery({
        queryKey: ['users', 'count', 'admin'],
        queryFn: () => usersApi.getCountAllAdmin()
    })
};

export default useGetCountAllAdmin;