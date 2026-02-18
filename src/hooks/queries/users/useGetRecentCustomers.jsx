import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetRecentCustomers = () => {
    return useQuery({
        queryKey: ['users', 'customers', 'recent'],
        queryFn: () => usersApi.getRecentCustomers()
    })
};

export default useGetRecentCustomers;