import { StyleSheet, Text, View } from 'react-native';

const SettingsInfo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Change your app preferences and appearance here.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default SettingsInfo;
