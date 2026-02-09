import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { carsApi } from '../../../api/cars.api';

const useGetCarsByEmail = (email, page) => {
    return useQuery({
        queryKey: ['cars', email, page],
        queryFn: () => carsApi.findAllByEmail(email, page),
        enabled: !!email,
    })
};

export default useGetCarsByEmail;