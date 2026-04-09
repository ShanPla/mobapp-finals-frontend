import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 24,
    width: '80%',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 8 },
  message: { fontSize: 14, color: COLORS.subtext, marginBottom: 20 },
  buttons: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12 },
  cancelBtn: { paddingVertical: 8, paddingHorizontal: 16 },
  confirmBtn: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: COLORS.primary, borderRadius: 6 },
  cancelText: { color: COLORS.gray },
  confirmText: { color: COLORS.white },
});