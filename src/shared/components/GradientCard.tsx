import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type GradientCardProps = {
  title: string;
  children: ReactNode;
};

const GradientCard = ({ title, children }: GradientCardProps) => {
  const { colors } = useTheme();
  const styles = createGradientCardStyle(colors);

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentContainer}>{children}</View>
    </LinearGradient>
  );
};

const createGradientCardStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      marginTop: 30,
      padding: 22,
      borderRadius: 12,
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
