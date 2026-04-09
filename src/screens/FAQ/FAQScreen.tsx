import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const FAQS = [
  { q: 'How do I make a booking?', a: 'Browse our rooms, select one you like, and tap "Book Now". Follow the prompts to confirm your reservation.' },
  { q: 'Can I cancel my booking?', a: 'Yes, bookings can be cancelled up to 24 hours before check-in for a full refund.' },
  { q: 'What payment methods are accepted?', a: 'We accept credit/debit cards, GCash, Maya, and bank transfers.' },
  { q: 'Is breakfast included?', a: 'Breakfast inclusion depends on the room package. Check the room details for more information.' },
  { q: 'How do I contact support?', a: 'You can reach us at support@luxestay.com or call our hotline at 1800-LUXE.' },
];

export default function FAQScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>FAQ</Text>
      </View>
      <View style={styles.body}>
        {FAQS.map((faq, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.question}>{faq.q}</Text>
            <Text style={styles.answer}>{faq.a}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}