import { ColorScheme } from '@/theme/types';
import { StyleSheet } from 'react-native';

const createProgressBarStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    progressBarContainer: {
      marginTop: 26,
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
    },

    progressBar: {
      flex: 1,
      height: 12,
      backgroundColor: colors.border,
      borderRadius: 999,
    },
    progressFill: {
      height: '100%',
      borderRadius: 16,
    },

    progressText: {
      color: colors.success,
      fontSize: 16,
      fontWeight: '700',
    },
  });

export default createProgressBarStyles;
