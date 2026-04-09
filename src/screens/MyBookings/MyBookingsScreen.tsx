import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useBookings } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import styles from './styles';

export default function MyBookingsScreen() {
  const { bookings } = useBookings();
  const { user } = useAuth();
  const myBookings = bookings.filter(b => b.userId === user?.id);

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' });
  const nights = (b: typeof myBookings[0]) =>
    Math.round((new Date(b.checkOutDate).getTime() - new Date(b.checkInDate).getTime()) / (1000 * 60 * 60 * 24));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <Text style={styles.subtitle}>{myBookings.length} booking{myBookings.length !== 1 ? 's' : ''}</Text>
      </View>

      {myBookings.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🏨</Text>
          <Text style={styles.emptyTitle}>No bookings yet</Text>
          <Text style={styles.emptyText}>Browse our rooms and make your first booking!</Text>
        </View>
      ) : (
        <FlatList
          data={myBookings}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.roomName}>{item.room.title}</Text>
                <View style={[styles.badge, styles[item.status.toLowerCase() as 'confirmed' | 'pending' | 'cancelled']]}>
                  <Text style={styles.badgeText}>{item.status}</Text>
                </View>
              </View>
              <View style={styles.cardBody}>
                <View style={styles.dateRow}>
                  <View style={styles.dateBox}>
                    <Text style={styles.dateLabel}>CHECK-IN</Text>
                    <Text style={styles.dateValue}>{formatDate(item.checkInDate)}</Text>
                  </View>
                  <View style={styles.dateBox}>
                    <Text style={styles.dateLabel}>CHECK-OUT</Text>
                    <Text style={styles.dateValue}>{formatDate(item.checkOutDate)}</Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.priceRow}>
                  <Text style={styles.nights}>{nights(item)} night{nights(item) > 1 ? 's' : ''}</Text>
                  <Text style={styles.price}>${item.totalPrice}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}