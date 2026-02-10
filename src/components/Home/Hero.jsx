import React, { useState } from 'react';
import { Link } from 'react-router';
import heroVideo from '../../assets/videos/hero-video.mp4'
import useGetBrands from '../../hooks/queries/Brands/useGetBrands';
import useGetCategories from '../../hooks/queries/Categories/useGetCategories';

const Hero = () => {
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')

    const { data: brands } = useGetBrands();
    const { data: categories } = useGetCategories();

    console.log(brand, category, sort)

    return (
        <div className='hero min-h-screen relative overflow-hidden'>

            {/* Background Video */}
            <video className="absolute inset-0 w-full h-full object-cover" src={heroVideo} autoPlay loop muted playsInline />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="xl:w-5xl space-y-5">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        Drive Your Dreams <span className='text-primary'>Today!</span>
                    </h1>

                    <p className="text-xs md:text-sm lg:text-base">
                        Affordable, reliable rentals for every journey.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full'>

                        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="select focus:outline-none outline-none border-none text-gray-500 w-full">
                            <option value={''}>Any Brand</option>
                            {brands?.map(brand => <option key={brand._id}>{brand.name}</option>)}
                        </select>

                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="select focus:outline-none outline-none border-none text-gray-500 w-full">
                            <option value={''}>Any Category</option>
                            {categories?.map(category => <option key={category._id}>{category.name}</option>)}
                        </select>

                        <select value={sort} onChange={(e) => setSort(e.target.value)} className="select focus:outline-none outline-none border-none text-gray-500 w-full">
                            <option value="">Default Price</option>
                            <option value="asc">Price Low to High</option>
                            <option value="desc">Price High to Low</option>
                        </select>

                        <Link to={`/cars/search?brand=${brand}&category=${category}&sort=${sort}`}>
                            <button className="btn btn-primary w-full text-black">Search</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;
