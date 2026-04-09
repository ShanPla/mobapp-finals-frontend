import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.offWhite },
  header: { backgroundColor: COLORS.navy, padding: 20, paddingTop: 56, paddingBottom: 28 },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: COLORS.gold, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarText: { fontSize: 22, fontWeight: 'bold', color: COLORS.white },
  name: { fontSize: 20, fontWeight: 'bold', color: COLORS.white },
  email: { fontSize: 13, color: COLORS.gray400, marginTop: 2 },
  section: { padding: 16 },
  sectionLabel: { fontSize: 12, color: COLORS.gray400, fontWeight: 'bold', letterSpacing: 1, marginBottom: 8, marginLeft: 4 },
  item: { backgroundColor: COLORS.white, borderRadius: 12, padding: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center', elevation: 1 },
  itemText: { fontSize: 15, color: COLORS.navy, marginLeft: 12, flex: 1 },
  chevron: { marginLeft: 'auto' },
  logoutItem: { backgroundColor: COLORS.white, borderRadius: 12, padding: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center', elevation: 1 },
  logoutText: { fontSize: 15, color: COLORS.red, marginLeft: 12 },
});