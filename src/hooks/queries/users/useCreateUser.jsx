import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useCreateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: usersApi.createUser,
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        }
    })
};

export default useCreateUser;