import React from 'react';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import BlogCard from '../components/Blog/BlogCard';
import BlogSearch from '../components/Blog/BlogSearch';
import BlogCategory from '../components/Blog/BlogCategory';
import BlogTags from '../components/Blog/BlogTags';
import Pagination from '../components/Pagination';
import image1 from '../assets/images/cars/bmw-series-3.webp'
import image2 from '../assets/images/cars/camry.avif'
import image3 from '../assets/images/cars/corolla.avif'


const blogContent = [
    {
        id: 1,
        image: image1,
        title: 'Documents required for car rental',
        description: 'Before renting a car, it’s important to have the correct documents ready, including a valid driving license, national ID or passport, and in some cases a credit card for security purposes. This guide walks you through everything you need to ensure a smooth and hassle-free rental experience.',
        category: 'Rent A Car',
        date: '27 Apr, 2026',
        slug: 'documents-required-for-car-rental',
    },
    {
        id: 2,
        image: image2,
        title: 'How to choose the right rental car',
        description: 'Choosing the right rental car depends on several factors such as your travel needs, budget, number of passengers, and trip duration. In this guide, we break down key considerations like fuel efficiency, comfort, and vehicle type to help you make the best decision for your journey.',
        category: 'Guides',
        date: '22 Feb, 2026',
        slug: 'choose-right-rental-car',
    },
    {
        id: 3,
        image: image3,
        title: 'Top tips for a smooth car rental experience',
        description: 'A successful car rental experience goes beyond just booking a vehicle. From inspecting the car before driving to understanding rental policies and avoiding hidden charges, this article shares essential tips that will save you time, money, and unnecessary stress during your trip.',
        category: 'Travel Tips',
        date: '20 Apr, 2026',
        slug: 'smooth-car-rental-experience',
    },
];

const BlogPage = () => {
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Blog'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <div className='md:grid grid-cols-12 gap-10 space-y-10 md:space-y-0 flex flex-col-reverse'>
                        <div className='col-span-8 space-y-10'>
                            {
                                blogContent.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))
                            }
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