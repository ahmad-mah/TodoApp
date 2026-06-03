import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SettingsItemProps = {
  iconName: string;
  iconBackgroundColor: string;
  textColor?: string;
  text: string;
  onPress?: () => void;
  trailingElement?: ReactNode;
};

const SettingsItem = ({
  iconName,
  iconBackgroundColor,
  text,
  textColor,
  onPress,
  trailingElement,
}: SettingsItemProps) => {
  const { colors } = useTheme();
  const styles = createSettingsItemStyle(colors);

  return (
    <Pressable style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leadingContainer}>
        <View style={{ ...styles.itemIconContainer, backgroundColor: iconBackgroundColor }}>
          <Ionicons name={iconName as any} style={styles.itemIcon} />
        </View>
        <Text style={{ ...styles.itemText, color: textColor ?? colors.text }}>{text}</Text>
      </View>

      {trailingElement ?? <Ionicons name="chevron-forward" style={styles.itemArrow} />}
    </Pressable>
  );
};

const createSettingsItemStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leadingContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
    itemIconContainer: {
      height: 38,
      width: 38,
    borderRadius: 8,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemIcon: {
      color: '#fff',
      fontSize: 18,
    },
    itemText: {
      fontSize: 18,
      color: colors.text,
      fontWeight: '600',
    },
    itemArrow: {
      fontSize: 18,
      color: colors.textMuted,
    },
  });

export default SettingsItem;
