import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import BlogCard from '../components/Blog/BlogCard';
import BlogSearch from '../components/Blog/BlogSearch';
import BlogCategory from '../components/Blog/BlogCategory';
import BlogTags from '../components/Blog/BlogTags';
import Pagination from '../components/Pagination';

const BlogPage = () => {
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Blog'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <div className='md:grid grid-cols-12 gap-10 space-y-10 md:space-y-0 flex flex-col-reverse'>
                        <div className='col-span-8 space-y-10'>
                            <BlogCard></BlogCard>
                            <BlogCard></BlogCard>
                        </div>
                        <div className='col-span-4 space-y-10'>
                            <BlogSearch></BlogSearch>
                            <BlogCategory></BlogCategory>
                            <BlogTags></BlogTags>
                        </div>
                    </div>
                    <div>
                        <Pagination></Pagination>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default BlogPage;