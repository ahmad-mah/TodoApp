import { ThemeProvider } from '@/theme/ThemeProvider';
import { NavigationBar } from 'expo-navigation-bar';
import { Stack } from 'expo-router';

function RootLayout() {
  return (
    <>
      <NavigationBar style="inverted" hidden />
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarStyle: 'dark',
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
