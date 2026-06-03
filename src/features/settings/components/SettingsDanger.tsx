import useTodoMutations from '@/features/home/hooks/useTodoMutations';
import GradientCard from '@/shared/components/GradientCard';
import SettingsItem from '@/shared/components/SettingsItem';
import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { Alert, StyleSheet, View } from 'react-native';

const SettingsDanger = () => {
  const { colors } = useTheme();
  const styles = createSettingsDangerStyle(colors);

  const { clearTodos } = useTodoMutations();

  const handleClearTodos = () => {
    Alert.alert('Reset', 'Are you sure you want to delete everything!', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: () => {
          clearTodos();
          Alert.alert('Success! Now start fresh again!');
        },
      },
    ]);
  };

  return (
    <GradientCard title={'Danger Zone'} titleStyle={styles.title}>
      <View style={styles.container}>
        <SettingsItem
          iconName="trash"
          iconBackgroundColor={colors.danger}
          text="Reset App"
          textColor={colors.danger}
          onPress={handleClearTodos}
        />
      </View>
    </GradientCard>
  );
};

export default SettingsDanger;

const createSettingsDangerStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      marginTop: 16,
    },
    title: {
      color: colors.danger,
    },
  });
