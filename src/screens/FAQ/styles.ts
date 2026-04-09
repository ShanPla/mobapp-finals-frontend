import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { backgroundColor: COLORS.primary, padding: 24, paddingTop: 48, flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 12 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  body: { padding: 16 },
  item: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  question: { fontSize: 15, fontWeight: 'bold', color: COLORS.text },
  answer: { fontSize: 13, color: COLORS.subtext, marginTop: 6, lineHeight: 20 },
});