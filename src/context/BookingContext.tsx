import React, { createContext, useContext, useState } from 'react';
import { Booking } from '../types';
import { PLACEHOLDER_BOOKINGS } from '../data/placeholders';

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
}

const BookingContext = createContext<BookingContextType>({
  bookings: [],
  addBooking: () => {},
});

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>(PLACEHOLDER_BOOKINGS);
  const addBooking = (booking: Booking) => setBookings(prev => [...prev, booking]);
  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext);