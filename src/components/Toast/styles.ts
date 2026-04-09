import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    padding: 14,
    borderRadius: 8,
    zIndex: 9999,
  },
  success: { backgroundColor: COLORS.success },
  error: { backgroundColor: COLORS.danger },
  info: { backgroundColor: COLORS.primary },
  text: { color: COLORS.white, fontSize: 14, textAlign: 'center' },
});