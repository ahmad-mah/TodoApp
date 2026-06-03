import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type props = {
  iconName: string;
  color: string;
  title: string;
  subtitle: string;
};

const StatCard = ({ iconName, color, title, subtitle }: props) => {
  const { colors } = useTheme();
  const styles = createStatCardStyle(colors);
  return (
    <View style={{ ...styles.cardContainer, borderLeftColor: color }}>
      <View style={{ ...styles.iconContainer, backgroundColor: color }}>
        <Ionicons name={iconName as any} style={styles.icon} />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default StatCard;

const createStatCardStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      backgroundColor: colors.border,
      borderRadius: 16,
      padding: 22,
      borderLeftWidth: 4,
      elevation: 10,
    },
    iconContainer: {
      height: 45,
      width: 45,
      borderRadius: 40,
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: '#fff',
      fontSize: 22,
    },
    TextContainer: {},
    title: {
      fontSize: 32,
      color: colors.text,
      fontWeight: '700',
    },
    subtitle: { color: colors.textMuted, fontWeight: '700' },
  });
