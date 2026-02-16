import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetUsers = (page, limit = 9) => {
    return useQuery({
        queryKey: ['users', page, limit],
        queryFn: () => usersApi.getUsers(page, limit),
        keepPreviousData: true
    })
};

export default useGetUsers;