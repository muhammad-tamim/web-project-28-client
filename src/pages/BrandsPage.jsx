import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import useGetBrands from '../hooks/queries/Brands/useGetBrands';
import LoadingSpinner from '../components/LoadingSpinner';
import Card1 from '../components/Cards/Card1';

const BrandsPage = () => {
    const { data: brands, isLoading, error, isError } = useGetBrands();

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'All Brands'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {brands.map(brand => <Card1 key={brand._id} image={brand.photoUrl} title={brand.name} where={`/brands-details/${brand.name}`} imageClass='m-20' hideOverlay bg></Card1>
                        )}
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default BrandsPage;