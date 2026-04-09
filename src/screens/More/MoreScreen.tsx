import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { COLORS } from '../../constants/colors';
import { RootStackParamList } from '../../types';
import styles from './styles';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function MoreScreen() {
  const navigation = useNavigation<Nav>();
  const { logout, user } = useAuth();
  const initials = `${user?.firstName?.[0] ?? ''}${user?.lastName?.[0] ?? ''}`.toUpperCase();

  const items = [
    { label: 'About Us', icon: 'information-circle-outline', screen: 'AboutUs' },
    { label: 'FAQ', icon: 'help-circle-outline', screen: 'FAQ' },
    { label: 'Policies', icon: 'document-text-outline', screen: 'Policies' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{initials}</Text></View>
        <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>INFORMATION</Text>
        {items.map(item => (
          <TouchableOpacity key={item.screen} style={styles.item} onPress={() => navigation.navigate(item.screen as any)}>
            <Ionicons name={item.icon as any} size={22} color={COLORS.gold} />
            <Text style={styles.itemText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.gray300} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>ACCOUNT</Text>
        <TouchableOpacity style={styles.logoutItem} onPress={logout}>
          <Ionicons name="log-out-outline" size={22} color={COLORS.red} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}