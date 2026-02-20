import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';
import { differenceInCalendarDays, format } from 'date-fns';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';

const Invoice = ({ booking }) => {


    if (!booking || booking.length === 0) {
        return <h2 className="text-center my-20">No invoice found</h2>;
    }

    const { car, payment, tran_id, createdAt, carId, startDate, endDate, totalCost } = booking;



    return (
        <div className="max-w-5xl mx-auto py-10 px-4">

            {/* Invoice Card */}
            <div className="bg-base-300 rounded-2xl p-8 shadow">

                {/* Header */}
                <div className="flex justify-between items-start border-b border-gray-300 pb-6">
                    <div>
                        <h1 className="text-lg md:text-3xl font-bold">INVOICE</h1>
                    </div>

                    <div className="text-right">
                        <h2 className="text-lg md:text-3xl font-bold text-primary">REXTAX</h2>
                        <p className="hidden md:block text-sm text-secondary">support@rentax.com</p>
                    </div>
                </div>

                {/* Customer Info */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div>
                        <h3 className="font-semibold mb-2 text-lg">From:</h3>
                        <p className="font-medium text-secondary">REXTAX</p>
                        <p className="text-secondary">support@rentax.com</p>
                        <p className="text-secondary">
                            Seller Email: {booking?.car?.email}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2 text-lg">Bill To:</h3>
                        <p className="text-secondary font-medium">{payment.cus_name}</p>
                        <p className="text-secondary">{payment.cus_email}</p>
                        <p className="text-secondary">{payment.cus_add1}</p>
                        <p className="text-secondary">
                            {payment.cus_city}, {payment.cus_postcode}
                        </p>
                        <p className="text-secondary">{payment.cus_country}</p>
                        <p className="text-secondary">Phone: {payment.cus_phone}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2 text-lg">Payment Info:</h3>
                        <p className="text-secondary">
                            Status: <span className="font-semibold">Paid</span>
                        </p>

                        <p className="text-secondary">
                            Payment Time: {format(new Date(createdAt), "PP, p")}
                        </p>
                        <p className="text-secondary">
                            Invoice ID: {tran_id}
                        </p>
                        <p className="text-secondary">
                            Validation ID: {payment.val_id}
                        </p>
                        <p className="text-secondary">
                            Car ID: {carId}
                        </p>
                    </div>


                </div>

                {/* Booking Details Table */}
                <div className="mt-10">
                    <h3 className="font-semibold text-lg mb-4">Booking Details</h3>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr className="font-semibold">
                                    <th>Car</th>
                                    <th>Rental Period</th>
                                    <th>Rental Duration</th>
                                    <th>Daily Price</th>
                                    <th>Total Price</th>
                                    <th>Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{car.name}</td>
                                    <td>
                                        {format(new Date(startDate), 'PP')} | {format(new Date(endDate), 'PP')}
                                    </td>
                                    <td>{differenceInCalendarDays(new Date(endDate), new Date(startDate))} Days</td>
                                    <td>{car.dailyRentalPrice} {payment.currency}</td>
                                    <td>{totalCost} {payment.currency}</td>
                                    <td>{payment.paymentMethod}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='my-8'>
                    <PDFDownloadLink
                        document={<InvoicePDF booking={booking} />}
                        fileName={`Invoice.pdf`}
                        style={{ textDecoration: 'none' }}>
                        {({ loading }) => (
                            <button className="btn btn-block btn-primary">
                                {loading ? 'Generating PDF...' : 'Download Invoice'}
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-300 pt-6 text-center text-secondary text-sm">
                    Thank you for choosing our service.
                    We look forward to serving you again!
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row w-full justify-center items-center  gap-4 mt-20">
                <Link to="/my-bookings">
                    <button className="btn btn-primary rounded-full btn-lg flex items-center gap-2">
                        <span>See All Bookings</span>
                        <MdOutlineArrowOutward />
                    </button>
                </Link>

                <Link to="/cars">
                    <button className="btn btn-outline btn-primary rounded-full btn-lg flex items-center gap-2">
                        <span>Add More Cars</span>
                        <MdOutlineArrowOutward />
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Invoice;
