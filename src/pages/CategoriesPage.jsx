import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import Card1 from '../components/Cards/Card1';
import useGetCategories from '../hooks/queries/Categories/useGetCategories';
import Card3 from '../components/Cards/Card3';
import LoadingSpinner from '../components/LoadingSpinner';

const CategoriesPage = () => {
    const { data: categories, isLoading, error, isError } = useGetCategories();

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
                        {categories.map(category => <Card1 key={category._id} image={category.photoUrl} title={category.name} where={`/category-details/${category.name}`}></Card1>
                        )}
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default CategoriesPage;