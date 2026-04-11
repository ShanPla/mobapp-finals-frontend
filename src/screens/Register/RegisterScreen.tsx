import React, { useState } from 'react';
import {
  ActivityIndicator, KeyboardAvoidingView, Platform,
  ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { authService } from '../../services/authService';
import { COLORS } from '../../constants/colors';
import styles from './styles';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Register'> };

export default function RegisterScreen({ navigation }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const { login } = useAuth();
  const { showToast } = useToast();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = 'First name is required';
    if (!lastName.trim()) e.lastName = 'Last name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    else if (password.length < 8) e.password = 'Password must be at least 8 characters';
    if (!confirmPassword) e.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) e.confirmPassword = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const user = await authService.register(firstName.trim(), lastName.trim(), email.trim(), password);
      login(user);
      showToast(`Welcome to LuxeStay, ${user.firstName}!`, 'success');
    } catch (err: any) {
      showToast(err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.top}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>✦</Text>
          </View>
          <Text style={styles.logo}>LUXESTAY</Text>
          <Text style={styles.tagline}>Join our exclusive community</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Create Account</Text>
          <Text style={styles.formSubtitle}>Fill in your details to get started</Text>

          <View style={styles.nameRow}>
            <View style={[styles.fieldGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>First Name</Text>
              <View style={[styles.inputWrap, errors.firstName ? styles.inputError : null]}>
                <TextInput style={styles.input} placeholder="Juan" placeholderTextColor={COLORS.gray300} value={firstName} onChangeText={t => { setFirstName(t); setErrors(p => ({ ...p, firstName: undefined })); }} />
              </View>
              {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
            </View>
            <View style={[styles.fieldGroup, { flex: 1 }]}>
              <Text style={styles.label}>Last Name</Text>
              <View style={[styles.inputWrap, errors.lastName ? styles.inputError : null]}>
                <TextInput style={styles.input} placeholder="Dela Cruz" placeholderTextColor={COLORS.gray300} value={lastName} onChangeText={t => { setLastName(t); setErrors(p => ({ ...p, lastName: undefined })); }} />
              </View>
              {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={[styles.inputWrap, errors.email ? styles.inputError : null]}>
              <TextInput style={styles.input} placeholder="you@email.com" placeholderTextColor={COLORS.gray300} value={email} onChangeText={t => { setEmail(t); setErrors(p => ({ ...p, email: undefined })); }} keyboardType="email-address" autoCapitalize="none" />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputWrap, errors.password ? styles.inputError : null]}>
              <TextInput style={styles.input} placeholder="Min. 8 characters" placeholderTextColor={COLORS.gray300} value={password} onChangeText={t => { setPassword(t); setErrors(p => ({ ...p, password: undefined })); }} secureTextEntry={!showPassword} autoCapitalize="none" />
              <TouchableOpacity onPress={() => setShowPassword(p => !p)} style={styles.eyeBtn}>
                <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={18} color={COLORS.gray400} />
              </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={[styles.inputWrap, errors.confirmPassword ? styles.inputError : null]}>
              <TextInput style={styles.input} placeholder="Re-enter password" placeholderTextColor={COLORS.gray300} value={confirmPassword} onChangeText={t => { setConfirmPassword(t); setErrors(p => ({ ...p, confirmPassword: undefined })); }} secureTextEntry={!showPassword} autoCapitalize="none" />
            </View>
            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
          </View>

          <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={handleRegister} disabled={loading}>
            {loading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.buttonText}>Create Account</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => navigation.goBack()}>
            <Text style={styles.linkText}>Already have an account? <Text style={styles.linkBold}>Sign In</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}