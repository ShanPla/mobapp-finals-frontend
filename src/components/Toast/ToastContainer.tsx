import React from 'react';
import { Text, View } from 'react-native';
import { useToast } from '../../context/ToastContext';
import styles from './styles';

export default function ToastContainer() {
  const { toast } = useToast();
  if (!toast) return null;
  return (
    <View style={[styles.container, styles[toast.type]]}>
      <Text style={styles.text}>{toast.message}</Text>
    </View>
  );
}