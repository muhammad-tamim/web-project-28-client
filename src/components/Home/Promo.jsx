import car1 from '../../assets/images/car1.jpg'
import { CiPlay1 } from 'react-icons/ci';

const Promo = () => {
    return (
        <div className="relative min-h-[60vh] flex items-center bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    `url(${car1})`,
            }}
        >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-10 w-full">
                <div className="flex flex-col justify-around items-center text-white space-y-8 text-center py-5 px-5 md:py-0 md:px-0">
                    <div className='space-y-2'>
                        <p className='text-primary text-xs tracking-[4px]'>EXPLORE</p>
                        <h3 className='text-4xl font-bold'>Car <span className='text-primary'>Promo</span> Video</h3>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className='btn btn-circle btn-outline btn-primary size-20'><CiPlay1 size={30} /></button>


                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-base-300">

                                <iframe className='${hidden} w-full h-60 object-cover' src="https://www.youtube.com/embed/NMThdHhrLoM?si=fVf4GiKTOBplitv1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                                <p className="py-4 text-primary">Press ESC key or click outside to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promo;