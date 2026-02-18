import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetCountAllCustomer = () => {
    return useQuery({
        queryKey: ['users', 'count', 'customer'],
        queryFn: () => usersApi.getCountAllCustomer()
    })
};

export default useGetCountAllCustomer;