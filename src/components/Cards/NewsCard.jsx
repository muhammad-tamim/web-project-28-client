import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

export const NewsCard = ({ item }) => {
    return (
        <div className='hero relative w-full h-[420px] rounded-3xl overflow-hidden'>
            <img src={item.image} alt={item.title} className='w-full h-full object-cover rounded-3xl' />

            <div className="hero-overlay rounded-3xl"></div>

            <p className='absolute top-4 w-full flex justify-center text-primary text-[11px] tracking-[5px]'>
                {item.category}
            </p>

            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center gap-5'>
                <h2 className="text-white font-semibold text-xl border-r border-r-primary pr-4">
                    {item.title}
                </h2>
                <Link to={'/blog'}>
                    <button className="btn btn-lg btn-circle btn-primary">
                        <MdArrowOutward />
                    </button>
                </Link>
            </div>
        </div>
    );
};