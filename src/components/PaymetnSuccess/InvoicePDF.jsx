import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { differenceInCalendarDays, format } from 'date-fns';

// Define your DaisyUI colors
const COLORS = {
    primary: '#f5b754',
    secondary: '#6B7280',
    bg: '#f9fafb', // light bg similar to base-300
    border: '#d1d5db', // gray-300
};

// PDF Styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: 'Helvetica',
        backgroundColor: COLORS.bg,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        paddingBottom: 10,
        marginBottom: 20,
    },
    headerTitle: { fontSize: 22, fontWeight: 'bold' },
    headerCompany: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
    headerCompanySub: { fontSize: 10, color: COLORS.secondary },

    section: { marginBottom: 15 },
    sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 4 },

    textPrimary: { color: COLORS.primary },
    textSecondary: { color: COLORS.secondary },

    grid3: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    column: { width: '32%' },

    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 20,
    },
    tableRow: { flexDirection: 'row' },
    tableColHeader: {
        width: '16.66%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f3f4f6',
        padding: 4,
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
    tableCol: {
        width: '16.66%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        padding: 4,
        fontSize: 10,
        textAlign: 'center',
    },

    footer: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 10,
        color: COLORS.secondary,
    },

    button: {
        backgroundColor: COLORS.primary,
        color: 'white',
        textAlign: 'center',
        padding: 6,
        borderRadius: 4,
        marginTop: 10,
    },
});


const InvoicePDF = ({ bookings }) => {
    if (!bookings || bookings.length === 0) return null;

    const booking = bookings[bookings.length - 1];
    const { payment, tran_id, createdAt, carId } = booking;
    return (
        <Document>
            <Page style={styles.page}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>INVOICE</Text>
                    <View style={{ textAlign: 'right' }}>
                        <Text style={styles.headerCompany}>REXTAX</Text>
                        <Text style={styles.headerCompanySub}>support@rentax.com</Text>
                    </View>
                </View>

                {/* Customer & Payment Info */}
                <View style={styles.grid3}>
                    <View style={styles.column}>
                        <Text style={styles.sectionTitle}>From:</Text>
                        <Text style={styles.textSecondary}>REXTAX</Text>
                        <Text style={styles.textSecondary}>support@rentax.com</Text>
                        <Text style={styles.textSecondary}>Seller Email: {booking?.car?.email || 'N/A'}</Text>
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.sectionTitle}>Bill To:</Text>
                        <Text style={styles.textSecondary}>{payment.cus_name}</Text>
                        <Text style={styles.textSecondary}>{payment.cus_email}</Text>
                        <Text style={styles.textSecondary}>{payment.cus_add1}</Text>
                        <Text style={styles.textSecondary}>
                            {payment.cus_city}, {payment.cus_postcode}
                        </Text>
                        <Text style={styles.textSecondary}>{payment.cus_country}</Text>
                        <Text style={styles.textSecondary}>Phone: {payment.cus_phone}</Text>
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.sectionTitle}>Payment Info:</Text>
                        <Text style={styles.textSecondary}>Status: <Text style={{ fontWeight: 'bold' }}>Paid</Text></Text>
                        <Text style={styles.textSecondary}>Payment Time: {format(new Date(createdAt), 'PP, p')}</Text>
                        <Text style={styles.textSecondary}>Invoice ID: {tran_id}</Text>
                        <Text style={styles.textSecondary}>Car ID: {carId}</Text>
                    </View>
                </View>

                {/* Booking Details Table */}
                <View style={styles.table}>
                    {/* Header */}
                    <View style={styles.tableRow}>
                        {['Car', 'Rental Period', 'Duration', 'Daily Price', 'Total Price', 'Payment Method'].map((h, idx) => (
                            <Text key={idx} style={styles.tableColHeader}>{h}</Text>
                        ))}
                    </View>

                    {/* Rows */}
                    {bookings.map(b => (
                        <View key={b._id} style={styles.tableRow}>
                            <Text style={styles.tableCol}>{b.car?.name || b.carId}</Text>
                            <Text style={styles.tableCol}>
                                {format(new Date(b.startDate), 'PP')} - {format(new Date(b.endDate), 'PP')}
                            </Text>
                            <Text style={styles.tableCol}>{differenceInCalendarDays(new Date(b.endDate), new Date(b.startDate))} Days</Text>
                            <Text style={styles.tableCol}>{b.car?.dailyRentalPrice} {b.payment.currency}</Text>
                            <Text style={styles.tableCol}>{b.totalCost} {b.payment.currency}</Text>
                            <Text style={styles.tableCol}>{b.payment.paymentMethod}</Text>
                        </View>
                    ))}
                </View>

                {/* Footer */}
                <Text style={styles.footer}>Thank you for choosing our service. We look forward to serving you again!</Text>
            </Page>
        </Document>
    );
};

export default InvoicePDF;