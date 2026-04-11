import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { useBookings } from '../../context/BookingContext';
import { useToast } from '../../context/ToastContext';
import { COLORS } from '../../constants/colors';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import styles from './styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BookingDetail'>;
  route: RouteProp<RootStackParamList, 'BookingDetail'>;
};

const CANCELLATION_FEE_PERCENT = 0.15; // 15% cancellation fee

export default function BookingDetailScreen({ navigation, route }: Props) {
  const { bookingId } = route.params;
  const { bookings, cancelBooking } = useBookings();
  const { showToast } = useToast();
  const [modalVisible, setModalVisible] = useState(false);

  const booking = bookings.find(b => b.id === bookingId);
  if (!booking) return null;

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-PH', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

  const nights = Math.round(
    (new Date(booking.checkOutDate).getTime() - new Date(booking.checkInDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  const cancellationFee = Math.round(booking.totalPrice * CANCELLATION_FEE_PERCENT);
  const refundAmount = booking.totalPrice - cancellationFee;

  const handleCancel = () => {
    cancelBooking(bookingId);
    setModalVisible(false);
    showToast('Booking cancelled. Refund processed minus cancellation fee.', 'info');
    navigation.goBack();
  };

  const statusStyle: Record<string, any> = {
    Confirmed: { badge: styles.confirmed, text: styles.confirmedText },
    Pending: { badge: styles.pending, text: styles.pendingText },
    Cancelled: { badge: styles.cancelled, text: styles.cancelledText },
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Booking Details</Text>
        </View>

        {/* Room image */}
        <Image source={{ uri: booking.room.thumbnailPic?.url }} style={styles.image} />

        <View style={styles.body}>
          {/* Title + status */}
          <View style={styles.statusRow}>
            <Text style={styles.roomTitle}>{booking.room.title}</Text>
            <View style={[styles.badge, statusStyle[booking.status]?.badge]}>
              <Text style={statusStyle[booking.status]?.text}>{booking.status}</Text>
            </View>
          </View>

          {/* Dates card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>STAY DETAILS</Text>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Check-in</Text>
              <Text style={styles.rowValue}>{formatDate(booking.checkInDate)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Check-out</Text>
              <Text style={styles.rowValue}>{formatDate(booking.checkOutDate)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Duration</Text>
              <Text style={styles.rowValue}>{nights} night{nights > 1 ? 's' : ''}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Guests</Text>
              <Text style={styles.rowValue}>{booking.totalGuests}</Text>
            </View>
          </View>

          {/* Price card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>PRICE BREAKDOWN</Text>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>${booking.room.pricePerNight} × {nights} night{nights > 1 ? 's' : ''}</Text>
              <Text style={styles.rowValue}>${booking.totalPrice}</Text>
            </View>
            {booking.status === 'Cancelled' && (
              <>
                <View style={styles.row}>
                  <Text style={styles.rowLabel}>Cancellation Fee (15%)</Text>
                  <Text style={[styles.rowValue, { color: COLORS.red }]}>-${cancellationFee}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                  <Text style={styles.rowLabel}>Refund Amount</Text>
                  <Text style={[styles.rowValue, { color: COLORS.green }]}>${refundAmount}</Text>
                </View>
              </>
            )}
            <View style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total Paid</Text>
              <Text style={styles.totalValue}>${booking.totalPrice}</Text>
            </View>
          </View>

          {/* Room details card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>ROOM INFO</Text>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Type</Text>
              <Text style={styles.rowValue}>{booking.room.type}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Max Guests</Text>
              <Text style={styles.rowValue}>{booking.room.maxPeople}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Rating</Text>
              <Text style={styles.rowValue}>★ {booking.room.averageRating}</Text>
            </View>
          </View>
        </View>

        {/* Cancel button */}
        {booking.status !== 'Cancelled' ? (
          <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(true)}>
            <Text style={styles.cancelBtnText}>Cancel Booking</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.cancelledNote}>
            <Text style={styles.cancelledNoteText}>This booking has been cancelled</Text>
          </View>
        )}
      </ScrollView>

      <ConfirmationModal
        visible={modalVisible}
        title="Cancel Booking?"
        message={`A cancellation fee of $${cancellationFee} (15%) will be charged.\n\nYou will receive a refund of $${refundAmount}.`}
        confirmText="Yes, Cancel"
        cancelText="Keep Booking"
        confirmColor={COLORS.red}
        icon="close-circle-outline"
        onConfirm={handleCancel}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
}