import { StyleSheet, Text, View } from 'react-native';

const HomeHeader = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
});

export default HomeHeader;
