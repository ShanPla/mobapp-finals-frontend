import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import styles from './styles';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'> };

export default function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleLogin = () => {
    if (!email || !password) { showToast('Please fill in all fields', 'error'); return; }
    login({ id: '1', firstName: email.split('@')[0], lastName: '', email });
    showToast('Welcome back!', 'success');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.top}>
        <Text style={styles.logo}>LUXESTAY</Text>
        <Text style={styles.tagline}>Luxury at your fingertips</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Sign In</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="you@email.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="••••••••" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkBold}>Register</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}