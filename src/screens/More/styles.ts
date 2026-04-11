import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.offWhite },

  profileCard: {
    backgroundColor: COLORS.navy,
    paddingTop: 56,
    paddingBottom: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: COLORS.white },
  profileInfo: { flex: 1 },
  profileName: { fontSize: 17, fontWeight: 'bold', color: COLORS.white, marginBottom: 2 },
  profileEmail: { fontSize: 13, color: 'rgba(255,255,255,0.6)' },
  memberBadge: {
    backgroundColor: COLORS.gold + '30',
    borderWidth: 1,
    borderColor: COLORS.gold,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  memberBadgeText: { fontSize: 11, color: COLORS.gold, fontWeight: 'bold' },

  scroll: { paddingBottom: 32 },

  groupLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.gray400,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 6,
    letterSpacing: 1,
  },
  menuCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: 14,
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 14,
  },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: COLORS.gray100 },
  menuIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: { flex: 1, fontSize: 15, color: COLORS.gray900, fontWeight: '500' },
  menuLabelDanger: { color: COLORS.red },

  footer: { paddingVertical: 28, alignItems: 'center', gap: 4 },
  footerLogo: { fontSize: 15, fontWeight: 'bold', color: COLORS.gold, letterSpacing: 3, marginBottom: 4 },
  footerText: { fontSize: 12, color: COLORS.gray400 },
});