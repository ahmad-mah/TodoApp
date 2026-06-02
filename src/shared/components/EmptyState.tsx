import { View, Text, StyleSheet } from 'react-native';
import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const EmptyState = () => {
  const { colors } = useTheme();

  const styles = createEmptyStateStyles(colors);
  return (
    <View style={styles.container}>
      <LinearGradient colors={colors.gradients.muted} style={styles.iconContainer}>
        <Ionicons name="clipboard-outline" size={64} style={styles.icon} />
      </LinearGradient>
      <Text style={styles.title}>No todos yet!</Text>
      <Text style={styles.description}>Add your first todo above to get started </Text>
    </View>
  );
};

export default EmptyState;

const createEmptyStateStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      height: 120,
      width: 120,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius: 70,
    },
    icon: {
      color: colors.textMuted,
      fontSize: 60,
    },
    title: {
      marginTop: 22,
      color: colors.text,
      fontSize: 24,
      fontWeight: '700',
    },
    description: {
      marginTop: 8,
      paddingHorizontal: 40,
      color: colors.textMuted,
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: 24,
    },
  });
