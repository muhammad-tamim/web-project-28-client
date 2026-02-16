import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useUpdateUser = (email) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }) => usersApi.updateUser(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user', email] });
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    })
};

export default useUpdateUser;