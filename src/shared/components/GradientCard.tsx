import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

type GradientCardProps = {
  title: string;
  children: ReactNode;
  titleStyle?: StyleProp<TextStyle>;
};

const GradientCard = ({ title, children, titleStyle }: GradientCardProps) => {
  const { colors } = useTheme();
  const styles = createGradientCardStyle(colors);

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.contentContainer}>{children}</View>
    </LinearGradient>
  );
};

const createGradientCardStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      padding: 22,
      borderRadius: 16,
      gap: 20,
      alignItems: 'stretch',
    },

    title: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.text,
    },

    contentContainer: {
      gap: 20,
    },
  });

export default GradientCard;
