import { ColorScheme } from '@/theme/types';
import { StyleSheet } from 'react-native';

const createHomeStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 20,
      alignItems: 'stretch',
    },
  });

export default createHomeStyles;
