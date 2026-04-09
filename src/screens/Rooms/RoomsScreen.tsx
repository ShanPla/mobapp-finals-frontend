import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PLACEHOLDER_ROOMS } from '../../data/placeholders';
import { RootStackParamList } from '../../types';
import styles from './styles';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function RoomsScreen() {
  const navigation = useNavigation<Nav>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Rooms</Text>
        <Text style={styles.subtitle}>{PLACEHOLDER_ROOMS.length} rooms available</Text>
      </View>
      <FlatList
        data={PLACEHOLDER_ROOMS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RoomDetail', { roomId: item.id })} activeOpacity={0.9}>
            <View>
              <Image source={{ uri: item.thumbnailPic?.url }} style={styles.image} />
              {!item.isAvailable && (
                <View style={styles.unavailableOverlay}>
                  <Text style={styles.unavailableText}>UNAVAILABLE</Text>
                </View>
              )}
            </View>
            <View style={styles.body}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.title}</Text>
                <View>
                  <Text style={styles.price}>${item.pricePerNight}</Text>
                  <Text style={styles.perNight}>/night</Text>
                </View>
              </View>
              <Text style={styles.type}>{item.type} · Up to {item.maxPeople} guests</Text>
              <View style={styles.amenities}>
                {item.amenities.slice(0, 4).map(a => (
                  <View key={a} style={styles.amenity}><Text style={styles.amenityText}>{a}</Text></View>
                ))}
              </View>
              <View style={styles.footer}>
                <Text style={styles.rating}>★ {item.averageRating} ({item.reviewCount} reviews)</Text>
                <View style={[styles.badge, item.isAvailable ? styles.available : styles.unavailable]}>
                  <Text style={item.isAvailable ? styles.availableText : styles.unavailableTextBadge}>
                    {item.isAvailable ? 'Available' : 'Unavailable'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}