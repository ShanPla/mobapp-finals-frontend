import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.offWhite },
  header: { backgroundColor: COLORS.navy, paddingHorizontal: 20, paddingTop: 56, paddingBottom: 24 },
  greeting: { fontSize: 13, color: COLORS.gray400 },
  name: { fontSize: 22, fontWeight: 'bold', color: COLORS.white, marginTop: 2 },
  subtitle: { fontSize: 13, color: COLORS.gold, marginTop: 4 },
  section: { padding: 16 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', color: COLORS.navy, marginBottom: 12 },
  card: { backgroundColor: COLORS.white, borderRadius: 14, marginRight: 14, width: 210, overflow: 'hidden', elevation: 3 },
  cardImage: { width: '100%', height: 130 },
  cardBody: { padding: 12 },
  cardName: { fontSize: 14, fontWeight: 'bold', color: COLORS.navy },
  cardType: { fontSize: 12, color: COLORS.gray500, marginTop: 2 },
  cardPrice: { fontSize: 14, color: COLORS.gold, fontWeight: 'bold', marginTop: 6 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 },
  rating: { fontSize: 12, color: COLORS.gray500 },
  badge: { backgroundColor: COLORS.green, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  badgeText: { fontSize: 10, color: COLORS.white, fontWeight: 'bold' },
  topBadge: { position: 'absolute', top: 10, left: 10, backgroundColor: COLORS.gold, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  topBadgeText: { fontSize: 10, color: COLORS.white, fontWeight: 'bold' },
});