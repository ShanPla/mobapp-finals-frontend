import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../types';
import { PLACEHOLDER_ROOMS } from '../../data/placeholders';
import { useToast } from '../../context/ToastContext';
import { useBookings } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import styles from './styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RoomDetail'>;
  route: RouteProp<RootStackParamList, 'RoomDetail'>;
};

export default function RoomDetailScreen({ navigation, route }: Props) {
  const { roomId } = route.params;
  const room = PLACEHOLDER_ROOMS.find(r => r.id === roomId);
  const { showToast } = useToast();
  const { bookings, addBooking } = useBookings();
  const { user } = useAuth();

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  if (!room) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nights = checkIn && checkOut
    ? Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const totalPrice = nights * room.pricePerNight;

  const formatDate = (d: Date) => d.toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' });

  const isDateConflict = () => {
    if (!checkIn || !checkOut) return false;
    return bookings.some(b => {
      if (b.room.id !== roomId || b.userId !== user?.id) return false;
      const bIn = new Date(b.checkInDate);
      const bOut = new Date(b.checkOutDate);
      return checkIn < bOut && checkOut > bIn;
    });
  };

  const handleBook = () => {
    if (!checkIn || !checkOut) { showToast('Please select check-in and check-out dates', 'error'); return; }
    if (nights <= 0) { showToast('Check-out must be after check-in', 'error'); return; }
    if (isDateConflict()) { showToast('You already have a booking for these dates', 'error'); return; }
    setModalVisible(true);
  };

  const confirmBooking = () => {
    addBooking({
      id: Date.now().toString(),
      userId: user!.id,
      room,
      checkInDate: checkIn!.toISOString(),
      checkOutDate: checkOut!.toISOString(),
      totalGuests: 1,
      totalPrice,
      status: 'Confirmed',
      bookedAt: new Date().toISOString(),
    });
    setModalVisible(false);
    showToast('Booking confirmed!', 'success');
    navigation.goBack();
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: room.thumbnailPic?.url }} style={styles.image} />
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>

        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.name}>{room.title}</Text>
            <View>
              <Text style={styles.price}>${room.pricePerNight}</Text>
              <Text style={styles.perNight}>/night</Text>
            </View>
          </View>
          <Text style={styles.type}>{room.type} · Up to {room.maxPeople} guests</Text>
          <Text style={styles.rating}>★ {room.averageRating} ({room.reviewCount} reviews)</Text>

          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{room.description}</Text>

          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenities}>
            {room.amenities.map(a => (
              <View key={a} style={styles.amenity}><Text style={styles.amenityText}>{a}</Text></View>
            ))}
          </View>

          {room.isAvailable && (
            <>
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>Select Dates</Text>
              <View style={styles.dateSection}>
                <View style={styles.dateRow}>
                  <TouchableOpacity style={styles.dateBox} onPress={() => setShowCheckIn(true)}>
                    <Text style={styles.dateLabel}>CHECK-IN</Text>
                    <Text style={checkIn ? styles.dateValue : styles.datePlaceholder}>
                      {checkIn ? formatDate(checkIn) : 'Select date'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dateBox} onPress={() => setShowCheckOut(true)}>
                    <Text style={styles.dateLabel}>CHECK-OUT</Text>
                    <Text style={checkOut ? styles.dateValue : styles.datePlaceholder}>
                      {checkOut ? formatDate(checkOut) : 'Select date'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {checkIn && checkOut && nights > 0 && (
                  <View style={styles.summary}>
                    <View style={styles.summaryRow}>
                      <Text style={styles.summaryLabel}>Duration</Text>
                      <Text style={styles.summaryValue}>{nights} night{nights > 1 ? 's' : ''}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                      <Text style={styles.summaryLabel}>Rate</Text>
                      <Text style={styles.summaryValue}>${room.pricePerNight}/night</Text>
                    </View>
                    <View style={styles.summaryRow}>
                      <Text style={styles.summaryLabel}>Total</Text>
                      <Text style={styles.summaryTotal}>${totalPrice}</Text>
                    </View>
                  </View>
                )}
              </View>
            </>
          )}
        </View>

        {room.isAvailable && (
          <TouchableOpacity
            style={[styles.button, (!checkIn || !checkOut || nights <= 0) && styles.buttonDisabled]}
            onPress={handleBook}
            disabled={!checkIn || !checkOut || nights <= 0}
          >
            <Text style={styles.buttonText}>
              {checkIn && checkOut && nights > 0 ? `Book for $${totalPrice}` : 'Select dates to book'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {showCheckIn && (
        <DateTimePicker
          value={checkIn ?? today}
          mode="date"
          minimumDate={today}
          onChange={(_, date) => {
            setShowCheckIn(false);
            if (date) { setCheckIn(date); if (checkOut && checkOut <= date) setCheckOut(null); }
          }}
        />
      )}

      {showCheckOut && (
        <DateTimePicker
          value={checkOut ?? (checkIn ? new Date(checkIn.getTime() + 86400000) : today)}
          mode="date"
          minimumDate={checkIn ? new Date(checkIn.getTime() + 86400000) : new Date(today.getTime() + 86400000)}
          onChange={(_, date) => {
            setShowCheckOut(false);
            if (date) setCheckOut(date);
          }}
        />
      )}

      <ConfirmationModal
        visible={modalVisible}
        title="Confirm Booking"
        message={`${room.title}\n${checkIn ? formatDate(checkIn) : ''} → ${checkOut ? formatDate(checkOut) : ''}\n${nights} night${nights > 1 ? 's' : ''} · $${totalPrice}`}
        onConfirm={confirmBooking}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
}