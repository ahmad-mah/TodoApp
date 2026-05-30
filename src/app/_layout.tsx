import { Stack } from 'expo-router';
import { NavigationBar } from 'expo-navigation-bar';
import { ThemeProvider } from '@/theme/themeProvider';

function RootLayout() {
  return (
    <>
      <NavigationBar style="inverted" />
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
