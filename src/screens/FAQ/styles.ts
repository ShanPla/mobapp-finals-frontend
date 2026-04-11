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
  headerSubtitle: { fontSize: 13, color: COLORS.gray400, marginTop: 2 },

  body: { padding: 16 },
  intro: { fontSize: 13, color: COLORS.gray500, textAlign: 'center', marginBottom: 20, lineHeight: 20 },
  introLink: { color: COLORS.gold, fontWeight: '600' },

  item: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  itemOpen: {
    borderColor: COLORS.gold,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  questionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  qNumber: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: COLORS.goldLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qNumberText: { fontSize: 13, fontWeight: 'bold', color: COLORS.goldDark },
  questionText: { flex: 1, fontSize: 14, fontWeight: '600', color: COLORS.navy, lineHeight: 20 },
  answerWrap: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray100,
    backgroundColor: COLORS.goldLight + '55',
  },
  answerText: { fontSize: 13, color: COLORS.gray700, lineHeight: 21 },
});