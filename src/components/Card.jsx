import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Card = ({ image, title, where, imageClass, hideOverlay = false, bg = false }) => {
    return (
        <div className={`hero relative w-full h-[400px] rounded-3xl overflow-hidden ${bg ? 'bg-base-300' : ''}`}>
            {
                imageClass
                    ?
                    <div className={`${imageClass}`}>
                        <img src={image} alt={title} className="w-full h-50 rounded-3xl object-fill" />
                    </div>
                    :
                    <img src={image} alt={title} className="w-full h-full rounded-3xl object-fill" />
            }

            {!hideOverlay && <div className="hero-overlay rounded-3xl" />}

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

export default Card;
