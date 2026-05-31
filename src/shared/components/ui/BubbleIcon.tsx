import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/theme/useTheme';
import { ColorScheme } from '@/theme/types';

const BubbleIcon = ({ name }: any) => {
  const { colors } = useTheme();
  const styles = bubbleStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.primary} style={styles.IconContainer}>
      <Ionicons name={name} style={styles.Icon} />
    </LinearGradient>
  );
};

export default BubbleIcon;

const bubbleStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    IconContainer: {
      padding: 16,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Icon: {
      color: '#fff',
      fontSize: 28,
    },
  });
