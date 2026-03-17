import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
    const { image, title, description, category, date, slug } = blog;

    return (
        <div className="card bg-base-300 w-full shadow-sm rounded-3xl">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-[400px] object-cover'
                />
            </figure>

            <div className="card-body space-y-3">
                <div className='space-x-2'>
                    <div className="badge badge-outline badge-primary">{category}</div>
                    <div className="badge badge-outline badge-primary">{date}</div>
                </div>

                <div className='space-y-1'>
                    <h2 className="card-title font-bold text-3xl">{title}</h2>
                    <p className='text-secondary'>{description}</p>
                </div>

                <Link to={`/blog/${slug}`}>
                    <button className="btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition flex items-center gap-1">
                        Learn More <MdOutlineArrowOutward />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard