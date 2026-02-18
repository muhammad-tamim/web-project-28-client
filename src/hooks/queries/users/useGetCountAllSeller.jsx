import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersApi } from '../../../api/users.api';

const useGetCountAllSeller = () => {
    return useQuery({
        queryKey: ['users', 'count', 'seller'],
        queryFn: () => usersApi.getCountAllSeller()
    })
}

export default useGetCountAllSeller;