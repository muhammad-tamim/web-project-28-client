import React from 'react';

const Accordion = () => {
    return (
        <div className="bg-base-300 rounded-3xl p-6 space-y-6">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>

            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-100 border border-primary rounded-3xl">
                    <input type="radio" name="car-faq" defaultChecked />
                    <div className="collapse-title font-semibold text-lg">
                        What documents are required to rent this car?
                    </div>
                    <div className="collapse-content text-secondary leading-relaxed">
                        You will need a valid driving license, a government-issued ID, and a verified payment method to complete your booking.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-primary rounded-3xl">
                    <input type="radio" name="car-faq" />
                    <div className="collapse-title font-semibold text-lg">
                        Can I cancel or modify my booking?
                    </div>
                    <div className="collapse-content text-secondary leading-relaxed">
                        Yes, bookings can be modified or canceled before the rental start date. Cancellation fees may apply depending on the timing.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-primary rounded-3xl">
                    <input type="radio" name="car-faq" />
                    <div className="collapse-title font-semibold text-lg">
                        Is fuel included in the rental price?
                    </div>
                    <div className="collapse-content text-secondary leading-relaxed">
                        Fuel is not included. The car must be returned with the same fuel level as at pickup to avoid additional charges.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-primary rounded-3xl">
                    <input type="radio" name="car-faq" />
                    <div className="collapse-title font-semibold text-lg">
                        What happens if the car is returned late?
                    </div>
                    <div className="collapse-content text-secondary leading-relaxed">
                        Late returns may incur extra charges based on the number of hours exceeded. Please inform us in advance if you expect delays.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
