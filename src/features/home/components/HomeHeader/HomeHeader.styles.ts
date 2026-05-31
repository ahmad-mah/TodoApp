import { ColorScheme } from '@/theme/types';
import { StyleSheet } from 'react-native';

const createHomeHeaderStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },

    headerTextContainer: {
      justifyContent: 'center',
      gap: 5,
    },
    headerTitle: {
      color: colors.text,
      fontSize: 32,
      fontWeight: '700',
    },
    headerSubtitle: {
      color: colors.textMuted,
      fontSize: 17,
      fontWeight: '500',
    },
  });

export default createHomeHeaderStyles;
