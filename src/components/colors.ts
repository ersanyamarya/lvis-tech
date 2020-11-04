const colors = {
  primary: '#FFE73A',
  primaryLight: '#FFF4A4',
  primaryDark: '#007381',
  base: '#FAFAFB',
  baseLight: '#FFF',
  baseDark: '#FBFBFB',
  accent: '#603973',
  accentLight: '#E8DBFB',
  accentDark: '#3B465A',
}
export default colors

export const COLOR_SET = [
  { backgroundColor: colors.accentDark, color: colors.baseDark },
  { backgroundColor: colors.accent, color: colors.baseDark },
  { backgroundColor: colors.accentLight, color: colors.accent },
  { backgroundColor: colors.base, color: colors.accent },
]
