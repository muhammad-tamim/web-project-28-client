import React from 'react';

const demoImages = [
    'https://duruthemes.com/demo/html/renax/light/img/slider/1.jpg',
    'https://duruthemes.com/demo/html/renax/light/img/slider/2.jpg',
    'https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg',
    'https://duruthemes.com/demo/html/renax/light/img/slider/4.jpg',
    'https://duruthemes.com/demo/html/renax/light/img/slider/5.jpg',
    'https://duruthemes.com/demo/html/renax/light/img/slider/5.jpg',
];

const CarGallery = () => {
    return (
        <div className="bg-base-300 rounded-3xl p-6 space-y-6">
            <h3 className="text-2xl font-bold">Gallery</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {demoImages.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-3xl group">
                        <img src={img}
                            alt={`Car gallery ${index + 1}`}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarGallery;
