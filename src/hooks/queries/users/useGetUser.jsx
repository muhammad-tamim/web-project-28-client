import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetUser = (email) => {
    return useQuery({
        queryKey: ['user', email],
        queryFn: () => usersApi.getUser(email),
        enabled: !!email
    })
};

export default useGetUser;