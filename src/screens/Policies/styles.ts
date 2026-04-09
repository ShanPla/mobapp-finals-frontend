import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { backgroundColor: COLORS.primary, padding: 24, paddingTop: 48, flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 12 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  body: { padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 8, marginTop: 16 },
  text: { fontSize: 14, color: COLORS.subtext, lineHeight: 22 },
});