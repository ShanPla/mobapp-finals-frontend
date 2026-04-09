import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.navy },
  top: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 60 },
  logo: { fontSize: 36, fontWeight: 'bold', color: COLORS.gold, letterSpacing: 2 },
  tagline: { fontSize: 13, color: COLORS.gray400, marginTop: 4 },
  form: { backgroundColor: COLORS.white, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 28, paddingBottom: 40 },
  formTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.navy, marginBottom: 20 },
  label: { fontSize: 13, color: COLORS.gray600, marginBottom: 6, marginTop: 12 },
  input: { borderWidth: 1, borderColor: COLORS.gray200, borderRadius: 10, padding: 13, fontSize: 14, color: COLORS.gray900, backgroundColor: COLORS.lightGray },
  button: { backgroundColor: COLORS.gold, padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  buttonText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  link: { alignItems: 'center', marginTop: 16 },
  linkText: { color: COLORS.navy, fontSize: 14 },
  linkBold: { fontWeight: 'bold', color: COLORS.gold },
});