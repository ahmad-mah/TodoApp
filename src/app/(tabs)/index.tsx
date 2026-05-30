import { ThemeMode } from '@/theme/mode';
import useTheme from '@/theme/useTheme';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Index() {
  const { setTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text>Hello, World! you are gonna do it </Text>

      <Pressable
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => setTheme(ThemeMode.LIGHT)}
      >
        <Text>Toggle the Theme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1345',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Index;
