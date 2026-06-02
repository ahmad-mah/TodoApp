import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorScheme } from '@/theme/types';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

type props = {
  text: string;
  color: string[];
  iconName: string;
  onPress?: () => void;
};

const HomeListItemButton = ({ color, iconName, onPress, text }: props) => {
  const { colors } = useTheme();
  const styles = createStyle(colors);

  return (
    <LinearGradient colors={color as any} style={{ borderRadius: 12 }}>
      <TouchableOpacity activeOpacity={0.7} style={styles.iconContainer} onPress={onPress}>
        <Ionicons name={iconName as any} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HomeListItemButton;

const createStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    iconContainer: {
      borderRadius: 12,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      paddingHorizontal: 22,
    },
    icon: {
      color: colors.text,
      fontSize: 15,
    },
    text: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
    },
  });
