import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';
import { PLACEHOLDER_ROOMS } from '../../data/placeholders';
import { RootStackParamList } from '../../types';
import styles from './styles';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const { user } = useAuth();
  const navigation = useNavigation<Nav>();
  const topRated = PLACEHOLDER_ROOMS.filter(r => r.isTopRated && r.isAvailable);
  const available = PLACEHOLDER_ROOMS.filter(r => r.isAvailable);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
        <Text style={styles.subtitle}>Where would you like to stay?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⭐ Top Rated</Text>
        <FlatList
          horizontal
          data={topRated}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RoomDetail', { roomId: item.id })}>
              <Image source={{ uri: item.thumbnailPic?.url }} style={styles.cardImage} />
              <View style={styles.topBadge}><Text style={styles.topBadgeText}>TOP RATED</Text></View>
              <View style={styles.cardBody}>
                <Text style={styles.cardName}>{item.title}</Text>
                <Text style={styles.cardType}>{item.type} · Up to {item.maxPeople} guests</Text>
                <Text style={styles.cardPrice}>${item.pricePerNight}/night</Text>
                <View style={styles.cardRow}>
                  <Text style={styles.rating}>★ {item.averageRating} ({item.reviewCount})</Text>
                  <View style={styles.badge}><Text style={styles.badgeText}>Available</Text></View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Available Rooms</Text>
        <FlatList
          horizontal
          data={available}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RoomDetail', { roomId: item.id })}>
              <Image source={{ uri: item.thumbnailPic?.url }} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <Text style={styles.cardName}>{item.title}</Text>
                <Text style={styles.cardType}>{item.type} · Up to {item.maxPeople} guests</Text>
                <Text style={styles.cardPrice}>${item.pricePerNight}/night</Text>
                <Text style={styles.rating}>★ {item.averageRating} ({item.reviewCount} reviews)</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}