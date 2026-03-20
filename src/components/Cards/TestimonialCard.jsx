import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export const TestimonialCard = ({ item }) => {
    return (
        <div className="card h-[300px] rounded-3xl p-10 bg-base-300 shadow-sm space-y-8">
            <div className="flex justify-between">
                <p className="text-primary text-5xl">
                    <FaQuoteLeft />
                </p>

                <div className="text-primary flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>

            <p className="text-gray-500 text-sm">{item.comment}</p>

            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={item.image} alt={item.name} />
                    </div>
                </div>
                <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                </div>
            </div>
        </div>
    );
};