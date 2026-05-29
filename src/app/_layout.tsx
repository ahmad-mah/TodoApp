import { Stack } from 'expo-router';
import { NavigationBar } from 'expo-navigation-bar';

function RootLayout() {
  return (
    <>
      <NavigationBar style="inverted" />

      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark',
        
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}

export default RootLayout;
