import { ColorScheme } from '@/theme/types';
import { StyleSheet } from 'react-native';

const createHomeListStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    list: {
      marginTop: 24,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 20,
      padding: 20,
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    listItemCheck: {
      backgroundColor: colors.border,
      width: 32,
      height: 32,
      borderRadius: 16,
    },
    listItemCheckIcon: {
      color: colors.text,
      fontSize: 20,
      fontWeight: '700',
    },
    listItemCheckFilled: {
      height: '100%',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItemContent: {
      gap: 20,
    },
    listItemText: {
      fontSize: 17,
      color: colors.text,
      fontWeight: '500',
    },
    listItemContentAction: {
      flexDirection: 'row',
      gap: 12,
    },
  });

export default createHomeListStyles;
