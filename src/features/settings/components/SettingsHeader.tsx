import BubbleIcon from '@/shared/components/BubbleIcon';
import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { StyleSheet, Text, View } from 'react-native';

const SettingsHeader = () => {
  const { colors } = useTheme();
  const styles = createSettingHeaderStyle(colors);

  return (
    <View style={styles.headerContainer}>
      <BubbleIcon name="settings-outline" />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Settigns</Text>
      </View>
    </View>
  );
};

export default SettingsHeader;

const createSettingHeaderStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 18,
    },

    headerTextContainer: {
      justifyContent: 'center',
      gap: 5,
    },
    headerTitle: {
      color: colors.text,
      fontSize: 32,
      fontWeight: '700',
    },
  });
