import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCarsByEmail = (email, page, limit = 9) => {
    return useQuery({
        queryKey: ['cars-email', email, page, limit],
        queryFn: () => carsApi.findAllByEmail(email, page, limit),
        enabled: !!email,
    })
};

export default useGetCarsByEmail;