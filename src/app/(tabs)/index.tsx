import { StyleSheet, Text, View } from 'react-native'

function Index() {
  return (
    <View style={styles.container} >
      <Text>Hello, World! ajdkj</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1345',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default Index
