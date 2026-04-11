import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.offWhite },

  header: {
    backgroundColor: COLORS.navy,
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.white },

  hero: {
    backgroundColor: COLORS.navy,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 36,
    alignItems: 'center',
  },
  logoMark: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoMarkText: { fontSize: 22, color: COLORS.white },
  heroTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.white, textAlign: 'center', marginBottom: 10 },
  heroSub: { fontSize: 14, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 22 },

  statsRow: {
    backgroundColor: COLORS.navyLight,
    flexDirection: 'row',
    paddingVertical: 18,
    marginBottom: 4,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 22, fontWeight: 'bold', color: COLORS.gold },
  statLabel: { fontSize: 11, color: COLORS.gray400, marginTop: 3 },
  statDivider: { width: 1, backgroundColor: COLORS.gray700, marginVertical: 4 },

  section: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.navy, marginBottom: 16, textAlign: 'center' },

  offersGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  offerCard: {
    width: '47%',
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
  },
  offerIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: COLORS.goldLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  offerTitle: { fontSize: 14, fontWeight: 'bold', color: COLORS.navy, textAlign: 'center', marginBottom: 4 },
  offerDesc: { fontSize: 12, color: COLORS.gray500, textAlign: 'center', lineHeight: 17 },

  experienceImg: { width: '100%', height: 200, borderRadius: 16, marginBottom: 16 },
  experienceTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.navy, marginBottom: 10 },
  experienceText: { fontSize: 14, color: COLORS.gray600, lineHeight: 22, marginBottom: 8 },

  reviewCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.gold,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  starsRow: { flexDirection: 'row', gap: 3, marginBottom: 8 },
  reviewText: { fontSize: 13, color: COLORS.gray700, lineHeight: 20, fontStyle: 'italic', marginBottom: 8 },
  reviewAuthor: { fontSize: 13, fontWeight: 'bold', color: COLORS.navy },
});