import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import styles from './styles';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Register'> };

export default function RegisterScreen({ navigation }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) { showToast('Please fill in all fields', 'error'); return; }
    login({ id: Date.now().toString(), firstName, lastName, email });
    showToast('Account created!', 'success');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.top}>
        <Text style={styles.logo}>LUXESTAY</Text>
        <Text style={styles.tagline}>Join us today</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Create Account</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} placeholder="Juan" value={firstName} onChangeText={setFirstName} />
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Dela Cruz" value={lastName} onChangeText={setLastName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="you@email.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="••••••••" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Already have an account? <Text style={styles.linkBold}>Sign In</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}