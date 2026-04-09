import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function AboutUsScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>About Us</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>
          LuxeStay is a premier hotel booking platform dedicated to providing you with the finest accommodation experiences. We partner with top-rated hotels to ensure comfort, luxury, and value for every stay.{'\n\n'}
          Our mission is to make luxury accessible to everyone, offering a seamless booking experience with transparent pricing and exceptional customer service.{'\n\n'}
          Founded in 2024, LuxeStay has grown to feature hundreds of premium properties across the Philippines and beyond.
        </Text>
      </View>
    </ScrollView>
  );
}