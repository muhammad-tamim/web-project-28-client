import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetRecentSellers = () => {
    return useQuery({
        queryKey: ['users', 'sellers', 'recent'],
        queryFn: () => usersApi.getRecentSellers()
    })
};

export default useGetRecentSellers;