import { ColorScheme } from '@/theme/types';
import { StyleSheet } from 'react-native';

const createHomeInputStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginTop: 24,
    },
    input: {
      flex: 1,
      backgroundColor: colors.backgrounds.input,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 16,
      color: colors.text,
      borderWidth: 2,
      borderColor: colors.border,
      fontSize: 17,
      fontWeight: '500',
    },
    button: {
      padding: 12,
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonIcon: {
      fontSize: 20,
      color: '#fff',
    },

    buttonDisabledIcon: {
      fontSize: 20,
      color: '#fff',
    },
  });

export default createHomeInputStyles;
