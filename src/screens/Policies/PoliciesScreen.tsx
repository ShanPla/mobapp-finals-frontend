import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function PoliciesScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Policies</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Check-in / Check-out</Text>
        <Text style={styles.text}>Check-in time is 2:00 PM. Check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.</Text>
        <Text style={styles.sectionTitle}>Cancellation Policy</Text>
        <Text style={styles.text}>Free cancellation up to 24 hours before check-in. Cancellations within 24 hours are subject to a one-night charge.</Text>
        <Text style={styles.sectionTitle}>Pet Policy</Text>
        <Text style={styles.text}>Pets are not allowed in any of our properties unless explicitly stated in the room details.</Text>
        <Text style={styles.sectionTitle}>Smoking Policy</Text>
        <Text style={styles.text}>All our properties are strictly non-smoking. A cleaning fee of ₱5,000 will be charged for violations.</Text>
      </View>
    </ScrollView>
  );
}