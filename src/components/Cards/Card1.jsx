import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Card1 = ({ image, title, where, imageP }) => {
    return (
        <div className="hero relative w-full h-[420px] rounded-3xl overflow-hidden">
            <div className={`${imageP}`}>
                <img src={image} alt={title} className="w-full h-full object-contain md:object-cover object-center" />
            </div>

            <div className="hero-overlay rounded-3xl" />

            <p className="absolute top-4 left-4 text-primary text-xl font-medium">
                {title}
            </p>

            <div className="absolute bottom-4 right-4">
                <Link to={`${where}`}>
                    <button className="btn btn-lg btn-circle btn-primary">
                        <MdArrowOutward />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card1;
