const Card = ({ title, value, icon }) => {
    return (
        <div className="flex gap-5 items-center rounded-3xl bg-base-100 p-6 shadow">

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center size-14 bg-base-300 rounded-xl">
                    {icon}
                </div>
            </div>

            <div>
                <p className="text-secondary text-sm">{title}</p>
                <h4 className="font-semibold text-lg">{value}</h4>
            </div>

        </div>
    );
};

export default Card;