import LoadingSpinner from '../LoadingSpinner';
import Card3 from '../Cards/Card3';
import useGetRecentCars from '../../hooks/queries/cars/useGetRecentCars';

const RecentVehicles = () => {

    const { data: cars, isLoading, error, isError } = useGetRecentCars();

    if (isLoading) {
        return <LoadingSpinner minHScreen={'min-h-scree'}></LoadingSpinner>;
    }

    if (isError) {
        return <h2 className="text-red-500 text-center my-20">Error: {error.message}</h2>
    }

    return (
        <div>
            <div className='flex justify-center mb-10'>
                <div className='border h-14 border-primary w-0'></div>
            </div>

            <div className='text-center space-y-3 mb-10'>
                <p className='text-primary text-[11px] tracking-[5px]'>Select Your Car</p>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Browse <span className='text-primary'>Recent Vehicles</span></h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {cars.map((car) => <Card3 car={car} key={car._id}></Card3>)}

            </div>
        </div>
    );
};

export default RecentVehicles;